import TweetEditor from "./composants/TweetEditor/TweetEditor"
import Header from "./composants/Header/Header" 
import Tweets from "./composants/Tweets/Tweets/"
import TweetProvider from "./providers/TweetProvider";

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