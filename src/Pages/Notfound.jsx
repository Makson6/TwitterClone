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
   function MessageError({error}) {
      return error.text.type === "required" ? <span className="text-red-500 bg-red-100 font-bold text-sm leading-tight mt-2 mb-2 px-4 py-2 border-red-500 border-solid border-2 rounded-md opacity-75">Vous ne pouvez pas poster un champ vide.</span> : <span className="text-red-500 bg-red-100 font-bold text-sm leading-tight mt-2 mb-2 px-4 py-2 border-red-500 border-solid border-2 rounded-md opacity-75">
   vous avz atteint la limite de caracteres a taper sur ce champ(100 caracteres) .</span>
   };
};
export default NotFound;