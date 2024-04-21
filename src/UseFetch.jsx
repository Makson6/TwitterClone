 import axios from "axios";

 axios.get("http://localhost:3000/")
 
      .then((result) => {
          console.log(result.data);
      }).catch((err) => {
        console.log(err('c odpdpdp'), err);
        
      });