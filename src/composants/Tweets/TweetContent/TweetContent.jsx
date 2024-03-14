import TweetActions from './TweetActions';
import TweetBoby from './TweetBody/TweetBody';

export default function TweetContent (props){

    return (
        <div className="tweet-content">
            <TweetBoby body={props.content.body}/>
            <TweetActions actions={props.content.actions} />
            
        </div>
    )
}