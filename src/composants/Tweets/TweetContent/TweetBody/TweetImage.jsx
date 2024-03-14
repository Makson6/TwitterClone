import postPhoto from '../../../../assets/images/img-post.png';

export default function TweetImage (props){
    return (
        <div className='tweet-image'>

        <img src={props.image} />
        </div>
    )
}