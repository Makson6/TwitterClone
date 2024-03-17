import Tweet from './Tweet';
import {data}  from '../../Data/Data';

export default function Tweets (){
    
    return (<div className="tweets">

        {data.map(el => (
            <Tweet key={el.id} tableau={el}/>
        ))}

    </div>)}