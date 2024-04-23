import { useEffect, useState } from "react";
import { TweetContext } from "../TweetContext";
import Data from "../../data/initial-data.json"
import axios from "axios";



const TweetProvider = ({children}) => {
    // const []=use
    const [url, setUrl] = useState ("https://my-api-serveur.onrender.com")
    // const [url, setUrl] = useState ("twitter-clone-red-eight.vercel.app")
    const [userId, setUserId]= useState()
    const [posts, setPosts] = useState();
    const [user, setUser ]=useState();
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        axios
          .get(`${url}/tweets`)
          .then((response) => {
            setPosts(response.data.reverse());
            setIsPending(false);
          })
          .catch((error) => console.error("Error fetching data:", error));
      }, [posts]);
      useEffect(() => {
        axios
          .get(`${url}/currentUser`)
          .then((response) => setUserId(response.data))
          .catch((error) => console.error("Error fetching data:", error));
      }, []);

  
    return (
    <TweetContext.Provider value={{ posts, setPosts,user,userId, setUser, url, isPending}}>
        {children}
    </TweetContext.Provider>
    )                       
};

export default TweetProvider;