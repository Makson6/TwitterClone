import TweetEditor from "./composants/TweetEditor/TweetEditor"
import Header from "./composants/Header/Header" 
import Tweets from "./composants/Tweets/Tweets/"
import TweetProvider from "./providers/TweetProvider";

function Timeline (){
  return (
    <div>
      <Header />
      <TweetProvider>
        <TweetEditor />
        <Tweets  />
      </TweetProvider>
    </div>
  );
}
export default Timeline 