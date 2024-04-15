import Tweet from './Tweet';
import { useContext } from 'react';
import { TweetContext } from '../../UseContext/TweetContext';


export default function Tweets (){
    let {posts} = useContext(TweetContext);
console.log(posts);

    return (<div className="tweets">
        {posts?.map(el => (
            <Tweet  key={el.id} tableau={el}/>
        ))}

    </div>)}