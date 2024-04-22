import Tweet from './Tweet';
import { useContext } from 'react';
import { TweetContext } from '../../Context/TweetContext';

export default function Tweets (){
    let {posts} = useContext(TweetContext);

  
    return (<div className="tweets">
        {posts?.map(el => (
            <Tweet  key={el.id} tableau={el}/>
        ))}

    </div>)}