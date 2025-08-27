import { Timelapse } from "@mui/icons-material";

export function AnalysisTimeline(props: any) {
  const { created_at, completed_at } = props.urlInsights;
  console.log(props.created_at)
  console.log(created_at)

  const createdAt = new Date(created_at);
  const completedAt = new Date(completed_at);

  const durationMs = completedAt.getTime() - createdAt.getTime();

  // Format to "07 Aug 2025, 22:31"
  const formatDate = (date: Date) =>
    date.toLocaleString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });

  return (
    <div className="overflow-x-auto rounded-xl shadow-md border-1 p-4 border-gray-200">
      <h1 className="text-xl font-semibold flex gap-2 items-center mb-4">
        <Timelapse fontSize="medium" color="secondary" />
        Analysis Timeline
      </h1>

      <div className="flex items-center gap-4 mb-4 ">
        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
        <div>
          <p className="text-lg">Analysis Started</p>
          <p className="text-gray-500 text-sm">{formatDate(createdAt)}</p>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-4 ">
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <div>
          <p className="text-lg">Analysis Completed</p>
          <p className="text-gray-500 text-sm">{formatDate(completedAt)}</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <p className="text-gray-300 text-sm">|</p>
        <div>
          <p className="text-gray-500 text-sm">
            Total analysis time: {Math.round(durationMs / 1000)}s
          </p>
        </div>
      </div>
    </div>
  );
}
