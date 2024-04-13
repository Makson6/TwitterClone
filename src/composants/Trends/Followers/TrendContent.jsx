
import { Link } from "react-router-dom";



function TrendContent(pois) {
  return (
    <div className="author">
      
      <Link to="/profile">
       <div className="author">
        {pois.content.name}
        <img src={pois.content.logo.Verified} />
      </div>
    
  </Link>
      <div className="author-detail">{pois.content.detail}</div>
    </div>
  );
}

export default TrendContent;
