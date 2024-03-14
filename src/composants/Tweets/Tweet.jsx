import TweetAvatar from "./TweetAvatar";
import TweetContent from "./TweetContent/TweetContent";

export default function Tweet (props){

    return (
        <div className="tweet">
            <TweetAvatar avatar={props.tableau.logo} />
            <TweetContent content={props.tableau.content}/>
        </div>
    )
}