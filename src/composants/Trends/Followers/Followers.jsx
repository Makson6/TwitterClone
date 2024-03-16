import data2 from "../../Data/Data2"
import TrendAuthor from "./TrendAuthor";

export default function Followers() {
    return (
      <>
      <div className="trend">
      <div className="tite">
        <h3>Who to follow</h3>
        </div> 
         {data2.map(el => (
           <TrendAuthor key={el.id} tab={el}/>
           ))}
        <p className="p">Show more</p>
        </div>
           </>
        
        )}