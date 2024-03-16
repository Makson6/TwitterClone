
import Search from "../../../assets/Icons/Others/Search.svg"

export default function SearchBar(){
    return(

       <div className="trends">
         <div id="search-bar">
            <img src={Search} />
            <input type="text" placeholder="Search" />
        </div>
       </div>
    )
}