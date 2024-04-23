
import MessageError from "../../../MessageError"

export default function TweetEditorInput ({register,error}){ 
  return <div>
    <input
    type="text"
    name="Post"
    maxLength={101}
    className="tweet-editor-input"
    placeholder="What’s happening?"
    {...register("text", { required: true, maxLength: 100 })}
    />
    {/* {error.text ==="required"? <p error={ error}> pas cool </p>:<p error={ error}>codddddddd</p>  } */}
    {error.text && <MessageError error={ error} />}
  </div>
}