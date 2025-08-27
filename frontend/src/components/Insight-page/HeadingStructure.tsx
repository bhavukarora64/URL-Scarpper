import { LinkOutlined } from '@mui/icons-material';
import {
    BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer
  } from 'recharts';
  

export function HeadingStructure(props: any) {

    const data = [
        { name: 'H1', users: props.urlInsights[0].h1 },
        { name: 'H2', users: props.urlInsights[0].h2 },
        { name: 'H3', users: props.urlInsights[0].h3},
        { name: 'H4', users: props.urlInsights[0].h4 },
        { name: 'H5', users: props.urlInsights[0].h5 },
        { name: 'H6', users: props.urlInsights[0].h6 },
      ]
    const headingCount = props.urlInsights[0].h1 + props.urlInsights[0].h2 + props.urlInsights[0].h3 + props.urlInsights[0].h4 + props.urlInsights[0].h5 + props.urlInsights[0].h6 

    return (
      <div className="rounded-xl shadow-md border-1 border-gray-200 px-4 py-4 w-full">
        <h1 className="text-xl font-semibold flex gap-2 mb-8">
            <LinkOutlined />
            Link Distribution {props.activeCrawlCount}
        </h1>
        <div>
            <SimpleBarChart data={data}/>
        </div>

        <div className='w-full px-32'>
        <div className='flex justify-between w-full text-gray-500 mb-2 text-md'>
                <h1>Heading level</h1>
                <h1>Count</h1>
            </div>
            <div className='flex justify-between w-full mb-2 '>
                <div className='flex gap-2 items-center'>
                    <div className='w-4 h-4 rounded-sm bg-purple-600'>.</div>
                    <h1>H1</h1>
                </div>
                <h1 className='font-bold'>{props.urlInsights[0].h1}</h1>
            </div>
            <div className='flex justify-between w-full mb-2 '>
                <div className='flex gap-2 items-center'>
                    <div className='w-4 h-4 rounded-sm bg-purple-500'>.</div>
                    <h1>H2</h1>
                </div>
                <h1 className='font-bold'>{props.urlInsights[0].h2}</h1>
            </div>
            <div className='flex justify-between w-full mb-2 '>
                <div className='flex gap-2 items-center'>
                    <div className='w-4 h-4 rounded-sm bg-purple-400'>.</div>
                    <h1>H3</h1>
                </div>
                <h1 className='font-bold'>{props.urlInsights[0].h3}</h1>
            </div>
            <div className='flex justify-between w-full mb-2 '>
                <div className='flex gap-2 items-center'>
                    <div className='w-4 h-4 rounded-sm bg-purple-300'>.</div>
                    <h1>H4</h1>
                </div>
                <h1 className='font-bold'>{props.urlInsights[0].h4}</h1>
            </div>
            <div className='flex justify-between w-full mb-2 '>
                <div className='flex gap-2 items-center'>
                    <div className='w-4 h-4 rounded-sm bg-purple-200'>.</div>
                    <h1>H5</h1>
                </div>
                <h1 className='font-bold'>{props.urlInsights[0].h5}</h1>
            </div>
            <div className='flex justify-between w-full mb-4'>
                <div className='flex gap-2 items-center'>
                    <div className='w-4 h-4 rounded-sm bg-purple-100'>.</div>
                    <h1>H6</h1>
                </div>
                <h1 className='font-bold'>{props.urlInsights[0].h6}</h1>
            </div>
            <div className='flex justify-between w-full'>
                <div className='flex gap-2 items-center'>
                    <h1>Total headings</h1>
                </div>
                <h1 className='font-bold'>{headingCount}</h1>
            </div>
        </div>
      </div>
    );
  }
  
function SimpleBarChart(props:any) {
return (
    <div className="w-full h-64">
    <ResponsiveContainer width="80%" height="100%">
        <BarChart data={props.data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="users" fill="#8884d8" />
        </BarChart>
    </ResponsiveContainer>
    </div>
);
}