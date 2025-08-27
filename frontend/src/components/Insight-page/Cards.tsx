export function Cards(props:any){
    return (
        <div className="flex gap-2 justify-between border-1 border-gray-300 shadow-sm rounded-lg w-76 h-28 items-center px-6 hover:shadow-lg">
            <div>
                <h1 className="text-gray-500 text-md">{props.heading}</h1>
                <h1 className="font-bold text-black text-2xl">{props.count}</h1>
            </div>
            <div>
                {props.data}
            </div>
        </div>
    )
}