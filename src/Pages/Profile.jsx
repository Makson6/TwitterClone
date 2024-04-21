import { useContext, useRef, useState} from "react";
import { TweetContext } from "../UseContext/TweetContext";
import { useParams } from "react-router-dom";
import Tweet from "../composants/Tweets/Tweet";


function Profile(){
  const {userName} = useParams();
  const {user, posts,userId,setUserId} = useContext(TweetContext);
  

  function photoProfil(){
    if (userName == "@Bradley_") {
      return userId.src 
    }
    if (userName == "@CNN") {
      return user[0].logo 
    }
    if (userName == "@nytimes") {
      return user[1].logo 
    }else {
      return user[2].logo
    }
  }
  
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
               <img className="avatar" src={photoProfil()}/>
      </div>
        </div>

        
        {filteredData?.map(el => ( 
            <Tweet  key={el.id } tableau={el}/>
        ))}
        
       
      </div>
    )
  }

export default Profile;