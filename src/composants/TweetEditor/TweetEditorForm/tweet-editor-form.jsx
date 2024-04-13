import TweetEditorInput from "./tweet-editor-input";
import TweetEditorButtons from "./tweet-editor-buttons";
import { Children } from "react";

export default function TweetEditorForm (){

    

    return <div className="tweet-editor-form">
        <form >
          <TweetEditorInput/>
          <TweetEditorButtons/> 
       
        </form>  
    </div>
}