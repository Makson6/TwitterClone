import Search from "../../assets/Icons/Others/Search.svg"
import "./Trends.css"
function Trends (){

return (
    <div className="trend">
    <div className="trendSearch">
        <img src={Search} alt="" srcset="" />
        <input type="text" placeholder="Search" />
    </div>
    <div className="trandsdiv">
        <p>deuxime</p>
    </div>
    <div className="trandsdiv">
        <p>troisieme</p>
    </div>
    </div>
)
}

export default Trends;