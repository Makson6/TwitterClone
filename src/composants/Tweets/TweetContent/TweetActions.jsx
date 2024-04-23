import { useState } from "react";
import TweetAction from "../TweetAction";
import reply from "../../../assets/Icons/Reply.svg"
import retweet from "../../../assets/Icons/Retweet.svg"
import share from "../../../assets/Icons/Share.svg"
import love from "../../../assets/Icons/Love.svg"
import ReacIcon from "/isReact.svg";

export default function TweetActions (props){
    const [isReact, setIsReact] = useState(false);
    const icon = isReact ? ReacIcon : love;
    const handleClick = () => {
        setIsReact(!isReact);
    }
      
    return (
        <div className="tweet-actions">
           <TweetAction action={props.actions.action1} image={reply}/>
           <TweetAction action={props.actions.action2} image={retweet}/>
           <TweetAction handleClick={handleClick} action={props.actions.action3} image={icon}/>
           <TweetAction action={props.actions.action4} image={share}/>
        </div>
    )
}