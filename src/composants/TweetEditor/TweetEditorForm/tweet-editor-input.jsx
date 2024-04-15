import { useContext, useState } from "react";
import TweetContent from "../../Tweets/TweetContent/TweetContent";


export default function TweetEditorInput (){ 
  const [inputText,setInputText]=useState('');
  
  const [newTweet,setNewTweet]=useContext(TweetContent);

  const handleChange = (e)=> {
    setInputText(e.target.value)
    if(e.target.value.length == 100){
      alert("vous ne pouvez pas poster plus de 100 caracteres!!")
    }
    
        
  };
  
  return <input value={newTweet} onChange={handleChange } maxLength={100} placeholder="What's happening?" className="tweet-editor-input" />
}