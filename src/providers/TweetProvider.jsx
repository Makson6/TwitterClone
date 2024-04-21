import { useState } from "react";
import { TweetContext } from "../UseContext/TweetContext";
import Data from "../data/initial-data.json"



const TweetProvider = ({children}) => {
    const [userId, setUserId]= useState(Data.currentUser)
    const [posts, setPosts] = useState(Data.tweets);
    const [user, setUser ]=useState(Data.tweets);
     
  
    return (
    <TweetContext.Provider value={{ posts, setPosts,user,userId, setUser}}>
        {children}
    </TweetContext.Provider>
    )                       
};

export default TweetProvider;