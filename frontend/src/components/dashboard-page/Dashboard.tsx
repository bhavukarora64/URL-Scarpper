import {ArrowBack, CheckBoxOutlined, CodeOutlined, ErrorOutlineOutlined, LanguageOutlined, TimelapseOutlined } from "@mui/icons-material";
import { Cards } from "./Cards";
import { AnalysisSection } from "./AnalysisSection";
import { ActiveCrawl } from "./ActiveCrawl";
import { useAtom } from "jotai";
import { completedURL, runningURL, analysisList } from "../../store/URLs";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAtomValue } from "jotai"
import { userId } from "../../store/URLs";

export function Dashboard(){

    const [completeURLs, setCompleteURLs] = useAtom(completedURL);
    const [inProgressURLs, setInProgressURLs] = useAtom(runningURL);
    const [analysis, setAnalysis] = useAtom(analysisList);
    const [brokenLinkCount, setBrokenLinkCount] = useState(0);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    const currentUserId = useAtomValue(userId)
    async function fetchAnalysis() {
        setBrokenLinkCount(0);
        const {data} = await axios.post(`https://url-scrapper-enzt.onrender.com/urls`, {
            userId: currentUserId,
            page: page,
            limit: 10
        });
        
        if(data.UrlAnalysis) setAnalysis(data.UrlAnalysis);
        else alert("No Analysis Found");

        setPage(data.page)
        setTotalPage(data.totalPage)
    
        const inProgress:any = [];
        const completed:any = [];
    
        data.total.forEach((element:any) => {
            if (element.completed_at === null) {
                inProgress.push(element);
            } else {
                completed.push(element);
            }

            setBrokenLinkCount(prevValue => prevValue + element.broken_links_count);
        });
    
        setInProgressURLs(inProgress);
        setCompleteURLs(completed);
    }

    useEffect(() => {
        fetchAnalysis();

        const interval = setInterval(()=>{
            fetchAnalysis();
        }, 10000)

        return() => clearInterval(interval);
    }, [page])

    let totalCompleted = completeURLs.length || 0;
    let totalInProgress = inProgressURLs.length || 0;
    
    return (
        <div className="mx-24 mt-12">
        <button className="border-1 p-2 flex items-center border-gray-300 rounded-md mb-6 text-sm hover:bg-gray-100 hover:cursor-pointer">
          <ArrowBack fontSize="small" />
          <Link to="/">
            <p className="mx-2">Back to URL Searcher</p>
          </Link>
        </button>
            <h1 className="text-3xl font-bold">Web Crawler Dashboard</h1>
            <p className="text-gray-500">Analyze website structure, links, and SEO health</p>
            <div className="flex justify-between mt-12">
                <Cards heading="Total URLs" count={completeURLs.length + inProgressURLs.length} data={<LanguageOutlined fontSize="large" color="primary"/>}/>
                <Cards heading="Completed" count={totalCompleted} data={<CheckBoxOutlined fontSize="large" color="success"/>}/>
                <Cards heading="In Progress" count={totalInProgress} data={<TimelapseOutlined fontSize="large" style={{ color: 'orange' }}/>}/>
                <Cards heading="Broken Links Found" count={brokenLinkCount} data={<ErrorOutlineOutlined fontSize="large" style={{ color: 'red' }} />}/>
            </div>
            <div className="flex justify-end mt-12 gap-2">
                <button className="border-1 p-2 flex items-center border-gray-300 rounded-md mb-3 text-sm hover:cursor-pointer hover:bg-red-400 bg-red-200"> 
                    <CodeOutlined fontSize="medium" />
                    <Link to="/"><p className="mx-2 font-bold">Add URL</p></Link>
                </button>
            </div>
            <div>
                <AnalysisSection analysis={analysis}/>
            </div>
            <div className="flex justify-end items-center gap-2 mt-2">
                    <button className="p-2 text-sm border-1 rounded-xl hover:cursor-pointer hover:bg-gray-200" onClick={() => {setPage(prevValue => prevValue>1 ? prevValue-1 : prevValue)}}>Prev</button>
                    <h1 className="text-sm">{page} / {totalPage}</h1>
                    <button className="p-2 text-sm border-1 rounded-xl hover:cursor-pointer hover:bg-gray-200" onClick={() => {setPage(prevValue => prevValue<totalPage ? prevValue+1 : prevValue)}}>Next</button>
                </div>
            <div className="mt-12 mb-12">
                <ActiveCrawl />
            </div>
        </div>
    )
}