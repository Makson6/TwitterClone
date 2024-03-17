import React from "react";
import CryIcon from "../../public/cry-icon.svg"


const NotFound = () => {
   return (
      <div>
      <img className="not-found" style={{
         
                  width: '150px',
                  height: '150px',
               }} src={CryIcon} />
               <div className="not-found-text">
       <h1>404!!!!</h1>
               </div>
      <h2 className="not-found-text">This page does not exist!!</h2>
      </div>
      
     
   );
};

export default NotFound;