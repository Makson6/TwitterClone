import TrendAvatar from "./TrendAvatar";
import TrendContent from "./TrendContent";

function TrendAuthor(pois) {
  return (
    <div className="trend-author">
      <div className="avatar">
         <TrendAvatar tava={pois.tab.avatar}/>
      </div>
      
      <div className="content">
        <TrendContent content={pois.tab.author}/>
        <button>follow</button>
      </div>
    </div>
  );
}

export default TrendAuthor;
