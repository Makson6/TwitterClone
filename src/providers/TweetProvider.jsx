import { useState } from "react";
import { TweetContext } from "../UseContext/TweetContext";
import { data } from '../Data/Data';


const TweetProvider = ({children}) => {
    const [posts, setPosts] = useState(data);
    
    return (
    <TweetContext.Provider value={{ posts, setPosts}}>
        {children} 
    </TweetContext.Provider>
    )
};

export default TweetProvider;