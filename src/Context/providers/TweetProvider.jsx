import { useEffect, useState } from "react";
import { TweetContext } from "../TweetContext";
import Data from "../../data/initial-data.json"
import axios from "axios";



const TweetProvider = ({children}) => {
    // const [url, setUrl] = useState ("http://localhost:3000")
    const [url, setUrl] = useState ("twitter-clone-red-eight.vercel.app")
    const [userId, setUserId]= useState()
    const [posts, setPosts] = useState();
    const [user, setUser ]=useState();

    useEffect(() => {
        axios
          .get(`${url}/tweets`)
          .then((response) => setPosts(response.data.reverse()))
          .catch((error) => console.error("Error fetching data:", error));
      }, [posts]);
      useEffect(() => {
        axios
          .get(`${url}/currentUser`)
          .then((response) => setUserId(response.data))
          .catch((error) => console.error("Error fetching data:", error));
      }, []);

  
    return (
    <TweetContext.Provider value={{ posts, setPosts,user,userId, setUser, url}}>
        {children}
    </TweetContext.Provider>
    )                       
};

export default TweetProvider;