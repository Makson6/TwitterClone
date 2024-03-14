import TrendContent from "./TrendContent"
import TrendAvatar from "./TrendAvatar";
import "./Trends.css"

export default function Trend(prop){
    return(
       <div className="">
         <TrendContent tcontent={prop.tabl.titreTrend} />
         <TrendAvatar tavatar={prop.tabl.icon}/>
      </div>
    )
}