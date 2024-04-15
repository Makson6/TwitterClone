import React, { useState } from "react";


// import Tweet from './Tweet';
import Tweet from "../../Tweets/Tweet";
import { useContext } from 'react';
import { TweetContext } from '../../../UseContext/TweetContext';



export  function Tweets (){
    let {posts} = useContext(TweetContext)
    
    return (<div className="tweets">
        {posts?.map(el => (
          <Tweet  key={el.id} tableau={el}/>
        ))}

    </div>)}


export default function Button( ) {
  let {posts} = useContext(TweetContext)

  
 const [Posts, setPosts] =useState([]);
 
 const handleClick = () =>{
  const newPost = `Paragraphe${Posts.length + 1}`;
  setPosts([...Posts,newPost])
 }

  return(
    <>
    <button  className="button" type="submit" onClick={handleClick} >Tweet</button>
    <div className="tweets">{Posts.map((post,index)=>(<p key={index}>{post}</p>))}</div> 
    </>

  )
}
