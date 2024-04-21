import { useRef, useState } from "react"

export default function TweetAction (props){
 const [action, setAction] = useState(props.action);
 let isclicked = useRef(false);

function click(){
    
    if(isclicked.current == false){
        isclicked.current = true   
    }else if(isclicked.current == true ){
        isclicked.current = false
    }
}

function increm (){
    
    if(isclicked.current == false){
        setAction(action +1);    
    } else{
        setAction(action - 1)}
        
        click();     
    
}


    return (
        <div className="tweet-action">
              <img src={props.image} />
              <span onClick={increm} >{action}</span>
        </div>
    )
}