import Tweet from './Tweet';
import { useContext } from 'react';
import { TweetContext } from '../../Context/TweetContext';

export default function Tweets (){
    let {posts, isPending} = useContext(TweetContext);

  
    return (<div className="tweets">
        { 
            isPending ? (
                <h1>Loading...</h1>
            ) : (
                posts?.map(el => (
                    <Tweet  key={el.id} tableau={el}/>
                ))
            )
        
        }

    </div>)}