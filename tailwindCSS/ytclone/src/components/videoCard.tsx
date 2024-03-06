export function VideoCard(props:any){
    return <div>
    <img src="/thumbnail.jpg" alt="img" className="rounded-xl cursor-pointer p-3"/>    
    <div className="w-full grid grid-cols-12 bg-black-400">
        <div className="col-span-1 row-span-4">
        <img src={props.image} alt="img" className="p-3 rounded-full w-20 h-20"/>    
        </div>     
        <div className="col-span-11 pt-5 pb-3">
                <div>
                    {props.title}
                </div>
        </div>
        <div className="col-span-11 text-gray-600  text-base">
                {props.author}
        </div>
        <div className="col-span-10 pl-0 text-gray-600 text-base">
               {props.views} views | {props.timestamp}
        </div>
    </div>
    </div>
}