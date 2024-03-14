import TweetAction from "../TweetActions";
import TweetImage from "./TweetImage";
import TweetText from "./TweetText";
import TweetTitle from "./TweetTitle";

export default function TweetBoby (props){

  return (
    <div className="tweet-body">
      <TweetTitle title={props.body.title}/>
      <TweetText text={props.body.text}/>
      <TweetImage image={props.body.image}/>
    </div>
  )
}