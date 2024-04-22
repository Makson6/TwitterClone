import TweetEditor from "./TweetEditor/TweetEditor"
import Header from "./Header/Header" 
import Tweets from "./Tweets/Tweets"

function Timeline (){
  
  return (
    <div className="timeline">
        <Header />
        <TweetEditor  />
        <Tweets  />
    </div>
  );
}
export default Timeline 