import Avatar from "./Avatar";
import TweetEditorForm from "./TweetEditorForm/tweet-editor-form";



export default function TweetEditor ({setUpdate}) {

     return <div className="tweet-editor"> 
          <Avatar/>
          <TweetEditorForm setUpdate ={setUpdate}/>
     </div>
}