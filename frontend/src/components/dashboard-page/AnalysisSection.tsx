import { AutoGraph, LinkOutlined, RemoveRedEyeOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";


export function AnalysisSection(props: any) {
    return (
      <div className="overflow-x-auto rounded-xl shadow-md border-1 p-4 border-gray-200">
            <h1 className="text-xl font-semibold flex gap-2">
                <AutoGraph />
                Analysis Results {props.activeCrawlCount}
            </h1>
        <table className="min-w-full text-sm text-left text-gray-700 bg-white border border-gray-200 mt-4">
          <thead className="bg-gray-100 text-xs uppercase text-gray-600">
            <tr>
              <th className="px-4 py-3">URL</th>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3 text-wrap">Internal Links</th>
              <th className="px-4 py-3">External Links</th>
              <th className="px-4 py-3">Broken Links</th>
              <th className="px-4 py-3">HTML Version</th>
              <th className="px-4 py-3">Created At</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {props.analysis[0] ? (props.analysis.map((element:any) => {

              const utcString = element.created_at;
              const localDate = new Date(utcString);
              const formatted = localDate.toLocaleString('en-GB', { 
                year: 'numeric', 
                month: '2-digit', 
                day: '2-digit', 
                hour: '2-digit', 
                minute: '2-digit'
              });
              
              return (
                      <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-mono">
                      <a href={element.url} target="_blank">
                        <div className="flex items-center gap-2">
                          <LinkOutlined/>
                          {element.url.length > 40 ? element.url.slice(0, 40) + '...' : element.url}
                        </div>
                      </a>
                      </td>
                    <td className="px-4 py-3">{element.title.length > 40 ? element.title.slice(0, 40) + '...' : element.title}</td>
                    <td className="px-4 py- font-semibold">
                      {
                        element.completed_at != null 
                        ? <div className="bg-green-200 w-24 h-6 rounded-2xl font-bold text-center flex items-center justify-center text-green-700">Completed</div> 
                        : <div className="bg-blue-200 w-24 h-6 rounded-2xl font-bold text-center flex items-center justify-center text-blue-700">Running</div>
                      }
                    </td>
                    <td className="px-4 py-3">{element.internal_links_count}</td>
                    <td className="px-4 py-3">{element.external_links_count}</td>
                    <td className="px-4 py-3 text-red-700 font-semibold">
                      <div className="bg-red-200 w-12 h-6 rounded-2xl font-bold text-center flex items-center justify-center">{element.broken_links_count}</div>
                    </td>
                    <td className="px-4 py-3">{element.html_version}</td>
                    <td className="px-4 py-3 text-gray-500">{formatted}</td>
                    <td className="px-4 py-3">
                    {element.completed_at !=  null && <Link to={`/insights/${element.id}/${element.user_id}`}>
                        <button className="flex justify-center items-center gap-1 border-1 p-2 border-gray-300 rounded-lg hover:bg-gray-100 hover:cursor-pointer">
                            <RemoveRedEyeOutlined/>
                            View
                        </button>
                      </Link>}  
                    </td>
                  </tr>
             )})

            ): (<h1 className=" text-gray-500 m-4 text-base">No analysis results found.</h1>)}
          </tbody>
        </table>
      </div>
    );
  }
  