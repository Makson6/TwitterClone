import Settings from "../../assets/Icons/Others/Settings.svg"
export default function TrendContent(prop){
      return (
          <div className="trendscontent">
            <div className="grdtitre">
            <h4>Trends for you </h4>
            <img src={Settings} alt=""/>
            </div>
             <p className="detail">
              {prop.tcontent.titre1}
             </p>
             <p className="author">
              {prop.tcontent.titre2}
             </p>
             <p className="detail">
              {prop.tcontent.titre3}
             </p>
               <span>Show more</span>
          </div>
        )       
} 