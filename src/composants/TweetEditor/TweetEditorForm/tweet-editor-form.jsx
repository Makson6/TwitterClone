import TweetEditorInput from "./tweet-editor-input";
import TweetEditorButtons from "./tweet-editor-buttons";
import { useState } from "react";
export default function TweetEditorForm (){
  const handleSubmit = (e)=>{
    e.preventDefault();
  }
    

    return <div className="tweet-editor-form">
        <form  onSubmit={handleSubmit}>
          <TweetEditorInput/>
          <TweetEditorButtons/> 
           
        </form>  
    </div>
}