import { LinkOutlined } from '@mui/icons-material';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer
} from 'recharts';

export function LinkDistribution(props: any) {
 const data = [
    { name: 'Internal', internallink: props.urlInsights.internal_links_count },
    { name: 'External', externallink: props.urlInsights.external_links_count },
    { name: 'Inaccessible', brokenlink: props.urlInsights.broken_links_count }
  ];

  return (
    <div className="rounded-xl shadow-md border-1 border-gray-200 px-4 py-4 w-full">
      <h1 className="text-xl font-semibold flex gap-2 mb-8">
        <LinkOutlined />
        Link Distribution {props.activeCrawlCount}
      </h1>
      <div>
        <SimpleBarChart data={data} />
      </div>

      <div className='w-full flex justify-between px-32'>
        <div className='bg-blue-100 flex flex-col items-center px-12 py-2 text-blue-700 font-semibold'>
          <h1>{props.urlInsights.internalLinks}</h1>
          <p className='font-light text-sm'>Internal</p>
        </div>
        <div className='bg-green-100 flex flex-col items-center px-12 py-2 text-green-700 font-semibold'>
          <h1>{props.urlInsights.externalLinks}</h1>
          <p className='font-light text-sm'>External</p>
        </div>
        <div className='bg-red-100 flex flex-col items-center px-12 py-2 text-red-700 font-semibold'>
          <h1>{props.urlInsights.inaccessibleLinks}</h1>
          <p className='font-light text-sm'>Inaccessible</p>
        </div>
      </div>
    </div>
  );
}

function SimpleBarChart({ data }: { data: any[] }) {
  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="80%" height="100%">
        <BarChart
          data={data}
          barSize={100}
          barGap={2}            
          barCategoryGap="2%"  
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="internallink" fill="#dbeafe" />
          <Bar dataKey="externallink" fill="#dbfce7" />
          <Bar dataKey="brokenlink" fill="#ffe2e2" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

