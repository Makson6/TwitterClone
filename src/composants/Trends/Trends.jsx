import Search from "../../assets/Icons/Others/Search.svg"
import { trendsData } from "../Data/TrendsData";
import Trend from "./Trend";
import "./Trends.css"
import More2 from "../../assets/Icons/Others/More-2.svg"
 console.log(trendsData);
function Trends (){

return (
    <div className="trends">
    <div className="trendSearch">
        <img src={Search} alt="" srcset="" />
        <input type="text" placeholder="Search" />
    </div>
    <div className="trend">
    {trendsData.map(el => (
            <Trend key={el.id} tabl={el}/>
        ))}
        <div className="lop">
            <img src={More2} alt="" srcset="" />
        </div>
    </div>
    <div className="trend">
        <p>troisieme</p>
    </div>
    </div>
)
}

export default Trends;