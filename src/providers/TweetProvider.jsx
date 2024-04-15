import { useState } from "react";
import { TweetContext } from "../UseContext/TweetContext";
// import { data } from '../Data/Data';

import Dataa from "../data/initial-data.json"


const TweetProvider = ({children}) => {

    const [posts, setPosts] = useState(Dataa.tweets);
    const [newTweet, setNewTweet ]=useState();
    
    return (
    <TweetContext.Provider value={{ posts, setPosts, newTweet, setNewTweet}}>
        {children} 
    </TweetContext.Provider>
    )
};

export default TweetProvider;