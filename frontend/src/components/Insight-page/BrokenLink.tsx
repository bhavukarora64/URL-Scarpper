import { ErrorOutlineOutlined } from "@mui/icons-material";
import axios from "axios";
import { useNavigate } from "react-router";

export function BrokenLinks(props: any) {
  const brokenLinks = props.brokenURL|| [];
  const navigate  = useNavigate();

  async function fetchURLDetails(url:string){
    try{
        navigate("/dashboard");
        await axios.post('http://localhost:5000/analyze', {
            url: url,
            userId: 1})

    }catch(e:any){
        alert(e.message)
    }

}

  return (
    <div className="overflow-x-auto rounded-xl shadow-md border-1 p-4 border-gray-200">
      <h1 className="text-xl font-semibold flex gap-2 items-center">
        <ErrorOutlineOutlined fontSize="medium" style={{ color: 'red' }} />
        Broken Links ({brokenLinks.length}) {props.activeCrawlCount}
      </h1>

      <table className="min-w-full text-sm text-left text-gray-700 bg-white border border-gray-200 mt-4">
        <thead className="bg-gray-100 text-xs uppercase text-gray-600">
          <tr>
            <th className="px-4 py-3">Broken URL</th>
            <th className="px-4 py-3">Status Code</th>
            <th className="px-4 py-3">Error Type</th>
            <th className="px-4 py-3">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {brokenLinks.length === 0 ? (
            <tr>
              <td colSpan={4} className="px-4 py-3 text-center text-gray-400">
                No broken links found.
              </td>
            </tr>
          ) : (
            brokenLinks.map((link:any, index:any) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-3 break-all text-blue-600 underline">
                  <a href={link.url} target="_blank" rel="noopener noreferrer">{link.url}</a>
                </td>
                <td className="px-4 py-3 text-sm text-gray-900 font-medium">
                  {link.status_code !== null ? link.status_code : 'N/A'}
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">
                  {link.error_type || 'Unknown'}
                </td>
                <td className="px-4 py-3 cursor-pointer" onClick={() => {fetchURLDetails(link.url)}}>
                    Retry
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
