import { Link } from "react-router-dom";
import data2 from "../../../Data/Data";
import TrendAuthor from "./TrendAuthor";


export default function Followers() {
  
    return (
      <>
      <div className="trend">
      <div className="tite">
        <h3>Who to follow</h3>
        </div> 
      <Link to="">
         {data2.map(el => (
           <TrendAuthor key={el.id} tab={el}/>
           ))}
        </Link>
        <p className="p" >Show more</p>
        </div>
      </>
        
        )}