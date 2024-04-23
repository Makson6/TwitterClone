import { useContext, useRef, useState} from "react";
import { TweetContext } from "../Context/TweetContext";
import { useParams } from "react-router-dom";
import Tweet from "../composants/Tweets/Tweet";
import  axios  from "axios";

function Profile(){
  const {userName} = useParams();
  const {user, posts,userId,setUserId} = useContext(TweetContext);

  
//definir une const pour stocker a condition de filtrage

const filteredData = posts.filter(item=> 
  item.id > 5)
  //faire en sorte que xa affiche sur le navigateur  

  return(
    <div className="timeline">
        <div className="tweet-editor">
        <h1 className="my-[10vh] mx-auto text-center text-6xl">
        Profil de : {userName}
      </h1>
      <div >
               <img className="avatar" src={userId.src}/>
      </div>
        </div>
        
        {filteredData?.map(el => ( 
            <Tweet  key={el.id } tableau={el}/>
        ))}
               
      </div>
    )
  }

export default Profile;