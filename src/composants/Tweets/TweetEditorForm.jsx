import TweetEditorInput from "../TweetEditor/TweetEditorForm/tweet-editor-input";
import TweetEditorButtons from "../TweetEditor/TweetEditorForm/tweet-editor-buttons";
import TweetEditorAction from "../TweetEditor/TweetEditorForm/tweet-editor-actions";
import Button from "../TweetEditor/TweetEditorForm/button"

export default function TweetEditorForm (){

    return <div className="tweet-editor-form">
        <TweetEditorInput/>
        <TweetEditorButtons/>
        <TweetEditorAction/>
        <Button/>
    </div>
}