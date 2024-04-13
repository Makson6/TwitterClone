import TweetImage from "./TweetImage";
import TweetText from "./TweetText";
import TweetTitle from "./TweetTitle";
import { Link } from "react-router-dom";


export default function TweetBoby (props){
  let userId = props.body.title.details;
  
  return (
    <div className="tweet-body">
      <Link to={`/profile/${userId}`}>
      <TweetTitle title={props.body.title}/>
      </Link>
      
      <TweetText text={props.body.text}/>
      <TweetImage image={props.body.image}/>
    </div>
  )
}