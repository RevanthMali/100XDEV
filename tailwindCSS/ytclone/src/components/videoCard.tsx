export function VideoCard(){
    return <div>
    <img src="/thumbnail.jpg" alt="img" />    
    <div className="w-full grid grid-cols-12 bg-gray-400">
        <div className="col-span-1 row-span-4">
        <img src="/thumbnail.jpg" alt="img" className="rounded-full w-20 h-20"/>    
        </div>     
        <div className="col-span-11 pt-5 pb-3">
                The Devarakonda:Family Star|Teaser(Telugu)
        </div>
        <div className="col-span-11 text-base">
               T-series 
        </div>
        <div className="col-span-10 pl-0 text-gray-600 text-base">
               3M views . 1 day ago
        </div>
    </div>
    </div>
}