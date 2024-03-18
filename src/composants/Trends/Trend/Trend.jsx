import Setting from "../../../assets/Icons/Others/Settings.svg";
import  {trendsData } from "../../../Data/Data";
import More2 from "../../../assets/Icons/Others/More-2.svg"

export default function Trend() {
  return (
    <div className="trend">
      <div className="titre">
        <h3 >Trends for you</h3>
        <img src={Setting} />
      </div>
      <div className="author">
          <div className="trend-content">
            <p className="author-detail">
              {trendsData[0].titreTrend.titre1}
              </p>
            <p className="author-name">
              {trendsData[0].titreTrend.titre2} 
              <img src={More2}/>
              </p>
            <p className="author-detail">
              {trendsData[0].titreTrend.titre3}
              </p>
          </div> 
          <div className="trend-content">
            <p className="author-detail">
              {trendsData[0].titreTrend.titre1}
              </p>
            <p className="author-name">
              {trendsData[0].titreTrend.titre2} 
              <img src={More2}/>
              </p>
            <p className="author-detail">
              {trendsData[0].titreTrend.titre3}
              </p>
          </div> 
          <div className="trend-content">
            <p className="author-detail">
              {trendsData[0].titreTrend.titre1}
              </p>
            <p className="author-name">
              {trendsData[0].titreTrend.titre2} 
              <img src={More2}/>
              </p>
            <p className="author-detail">
              {trendsData[0].titreTrend.titre3}
              </p>
          </div> 
          <div className="trend-content">
            <p className="author-detail">
              {trendsData[0].titreTrend.titre1}
              </p>
            <p className="author-name">
              {trendsData[0].titreTrend.titre2} 
              <img src={More2}/>
              </p>
            <p className="author-detail">
              {trendsData[0].titreTrend.titre3}
              </p>
          </div> 
      </div>
      <p  className="p">Show more</p>

    </div>
  );
}
