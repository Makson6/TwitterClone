
import MessageError from "../../../Errors"

export default function TweetEditorInput ({register,error}){ 

  return <div>
    <input
    type="text"
    name="Post"
    maxLength={100}
    className="tweet-editor-input"
    placeholder="What’s happening?"
    {...register("text", { required: true, maxLength: 100 })}
    />
    {error.text && <MessageError error={ error} />}
  </div>
}