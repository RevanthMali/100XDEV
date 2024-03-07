export const RevenueCard =({title,orderCount,amount})=>{
    return <div className="rounded-3 border-2 shadow-sm p-3">
                <div className="text-gray-700">{title}?</div>
                <div className="flex justify-between">
                    <div className="font-semibold text-2xl flex-col justify-center">${amount}</div>
                    { orderCount ?  <div className="text-blue flex cursor-pointer underline font-medium">
                        <div className="text-blue-700 ">{orderCount} order(s)</div> 
                       <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  className="fill-blue-700 w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
                        </div>
                    </div>:null
                    }
                </div>
    </div>
}