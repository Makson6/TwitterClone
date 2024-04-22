import TweetEditorInput from "./tweet-editor-input";
import TweetEditorButtons from "./tweet-editor-buttons";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { TweetContext } from "../../../Context/TweetContext";
import axios from "axios";

export default function TweetEditorForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { posts, setPosts, user,userId, setUser, url } = useContext(TweetContext);
  
  function onSubmit(data) {
    console.log(posts.length, url);
    
    const newPost = {
      id: "0" + posts.length + 1,
      logo: userId.src,
      content: {
        body: {
          title: {
            author: userId.name,
            userName: userId.userName,
            // "details2":".",
            details3: 'now',
          },
          text: data.text,
          image: "",
        },
        actions: {
          action1: 0,
          action2: 0,
          action3: 0,
          action4: "",
        },
      },
    };
    reset();
    // const datat = [newPost, ...posts];
    // setPosts(datat);  
    
    axios
    .post(`${url}/tweets`, newPost)
    .then((response) => {
      console.log("New post added:", response.data);
    })
    .catch((error) => {
      console.error("Error adding post:", error);
    });
  }
  return (
    <div className="tweet-editor-form">
      <form onSubmit={handleSubmit((data) => onSubmit(data))}>
        <TweetEditorInput register={register} error={errors} />
        <TweetEditorButtons />
      </form>
      
    </div>
  );
}
