import "../../Styles/Trends.css"
import SearchBar from "./SearchB/SearchBar";
import Followers from "./Followers/Followers"
import Trend from "./Trend/Trend";

export default function Trends (){
    return (
        <div className="trends">
             <SearchBar/>
             <Trend/>
             <Followers/>
        </div>
    )
}