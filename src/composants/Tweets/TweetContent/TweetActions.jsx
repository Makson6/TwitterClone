import TweetAction from "../TweetAction";
import reply from "../../../assets/Icons/Reply.svg"
import retweet from "../../../assets/Icons/Retweet.svg"
import share from "../../../assets/Icons/Share.svg"
import love from "../../../assets/Icons/Love.svg"

export default function TweetActions (props){
   
    return (
        <div className="tweet-actions">
           <TweetAction action={props.actions.action1} image={reply}/>
           <TweetAction action={props.actions.action2} image={retweet}/>
           <TweetAction action={props.actions.action3} image={love}/>
           <TweetAction action={props.actions.action4} image={share}/>
        </div>
    )
}