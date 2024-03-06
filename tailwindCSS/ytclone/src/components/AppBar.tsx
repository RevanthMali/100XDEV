import {SearchBar} from "@/components/searchBar"
export const AppBar=()=>{
 return <div className="flex justify-between">
    <div>
        Youtube
    </div>
    <div>
        <SearchBar/>
    </div>
    <div>
        Sign In
    </div>
 </div>
}