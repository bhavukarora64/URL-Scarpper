import {
    ArrowBack,
    CheckBoxOutlined,
    Code,
    LinkOutlined,
    NumbersOutlined,
    VerifiedUserOutlined,
  } from "@mui/icons-material";
  import { Cards } from "./Cards";
  import { LinkDistribution } from "./LinkDistribution";
  import { BrokenLinks } from "./BrokenLink";
  import { AnalysisTimeline } from "./AnalysisTimeline";
  import { useAtom, useAtomValue } from "jotai";
  import { links } from "../../store/URLs";
  import { Link, useParams } from "react-router";
  import axios from "axios";
  import { useEffect, useState } from "react";
  import { HeadingStructure } from "./HeadingStructure";
  import { userId } from "../../store/URLs";

  type HeadingStructure = {
    h1: number;
    h2: number;
    h3: number;
    h4: number;
    h5: number;
    h6: number;
  };
  
  export function Insight() {
    const [,setUrlDetail] = useAtom(links);
    const [headings, setheadings] = useState<HeadingStructure[]>([]);
    const [,setAnalysis_List] = useState(null);
    const [brokenURL, setBrokenURL] = useState([]);
    const params = useParams();
    const currentUserId = useAtomValue(userId)
    const [urlInsights, setUrlInsights] = useState<any>(null);
  
    async function fetchData() {
      try {

        const urlAnalysis = await axios.post(`http://localhost:5000/urls`, {
          userId: currentUserId,
          page: 1,
          limit: 10
        });

        setAnalysis_List(urlAnalysis.data.total);


        // Fetch link list from backend
        const { data } = await axios.post("http://localhost:5000/url_list", {
          analysisid: params.analysisid,
        });

        setUrlDetail(data);

        if(data){
          const broken_links = data.links.filter((element:any) => element.type === 'broken');
          setBrokenURL(broken_links);
        }

        const res = await axios.post("http://localhost:5000/headings", {
          analysisid: params.analysisid,
        });

        setheadings(res.data.headings || null);
  
        // Find matching analysis by ID
        const found = urlAnalysis.data.total.find(
          (element:any) => element.id === Number(params.analysisid)
        );
        setUrlInsights(found || null);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  
    useEffect(() => {
      fetchData();
    }, []);
  
    if (!urlInsights) {
      return (
        <div className="mx-24 mt-12">
          <p>Loading analysis details...</p>
        </div>
      );
    }
  
    const totalLinks =
      (urlInsights.internal_links_count || 0) +
      (urlInsights.external_links_count || 0) +
      (urlInsights.broken_links_count || 0);

      const headingCount = headings.length > 0
      ? (headings[0].h1 || 0) +
        (headings[0].h2 || 0) +
        (headings[0].h3 || 0) +
        (headings[0].h4 || 0) +
        (headings[0].h5 || 0) +
        (headings[0].h6 || 0)
      : 0;
    
  
    return (
      <div className="mx-24 mt-12">
        <button className="border-1 p-2 flex items-center border-gray-300 rounded-md mb-6 text-sm hover:bg-gray-100 hover:cursor-pointer">
          <ArrowBack fontSize="small" />
          <Link to="/dashboard">
            <p className="mx-2">Back to Dashboard</p>
          </Link>
        </button>
  
        <div className="flex justify-between">
          <div>
            <h1 className="text-3xl font-bold">{urlInsights.title}</h1>
            <p className="text-gray-500">{urlInsights.url}</p>
          </div>
          <div>
            <div className="px-4 py-3 text-green-700 font-semibold">
              <div className="bg-green-200 w-32 h-8 rounded-2xl font-bold text-center flex items-center justify-center text-sm">
                <CheckBoxOutlined fontSize="small" />
                Completed
              </div>
            </div>
          </div>
        </div>
  
        <div className="flex justify-between mt-12">
          <Cards
            heading="HTML Version"
            count={urlInsights.html_version}
            data={<Code fontSize="large" color="primary" />}
          />
          <Cards
            heading="Total Links"
            count={totalLinks}
            data={<LinkOutlined fontSize="large" color="success" />}
          />
          <Cards heading="Headings" count={headingCount} data={<NumbersOutlined fontSize="large" style={{ color: 'purple' }}/>}/>
          <Cards
            heading="Login Form"
            count={urlInsights.login_form_present ? "Yes" : "No"}
            data={
              <VerifiedUserOutlined
                fontSize="large"
                style={{ color: "orange" }}
              />
            }
          />
        </div>
  
        <div className="mt-12 flex justify-between gap-4">
          <LinkDistribution urlInsights={urlInsights} />
          <HeadingStructure urlInsights={headings}/>
        </div>
  
        <div className="mt-12">
          <BrokenLinks brokenURL={brokenURL} />
        </div>
  
        <div className="mt-12">
          <AnalysisTimeline urlInsights={urlInsights} />
        </div>
      </div>
    );
  }
  