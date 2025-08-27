import { LanguageOutlined, TimerOutlined } from "@mui/icons-material";
import { runningURL } from "../../store/URLs";
import { useAtom } from "jotai";

export function ActiveCrawl(props: any) {
  const [urlDetail] = useAtom(runningURL);

  return (
    <div className="rounded-xl shadow-md border-1 border-gray-200 px-4 py-4">
      <h1 className="text-xl font-semibold flex gap-2">
        <TimerOutlined />
        Active crawl {props.activeCrawlCount}
      </h1>
      <div className="bg-blue-50 rounded-xl px-4 py-4 gap-4 flex flex-col mt-4">
      {urlDetail[0] ? (urlDetail.map((element:any, index:number) => {
            return (
              <div key={index} className="flex gap-4 items-center">
                <LanguageOutlined color="primary" />
                <div className="flex flex-col gap-y-1 w-full">
                  <div className="flex gap-4 items-center">
                    {element.url.length > 40
                      ? element.url.slice(0, 40) + "..."
                      : element.url}
                    <div className="bg-blue-100 w-16 h-6 rounded-2xl font-bold text-center flex items-center justify-center text-xs text-blue-500">
                      Running
                    </div>
                  </div>
                  <div className="flex items-center w-full h-full justify-between">
                    <div className="w-[100%] h-2 bg-gray-200 overflow-hidden rounded">
                      <div className="h-full bg-black animate-pulse rounded" />
                    </div>
                  </div>
                </div>
              </div>
            );
        }))
      : (
        <h1 className=" text-gray-500 text-md">No active crawl found.</h1>
      )}
      </div>
    </div>
  );
}
