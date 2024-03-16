import React from "react";
import CryIcon from "../assets/cry-icon.svg"
import App from "../App";
import Header from "../composants/Header/Header";
import PageTitle from "../composants/Header/PageTitle";
import TopTweets from "../composants/Header/TopTweets";


const NotFound = () => {
   return (
      <div className="tweet=text">
      <img  style={{
                  width: '155px',
                  height: '155px',
               }} src={CryIcon} />
       <h1>Sorry!</h1>
      <h1>This page does not exist!!</h1>
      </div>
      
     
   );
};

export default NotFound;