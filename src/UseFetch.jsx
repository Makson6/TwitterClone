 import axios from "axios";

 axios.get("https://my-api-serveur.onrender.com")
 
      .then((result) => {
          console.log(result.data);
      }).catch((err) => {
        console.log(err('erreur de chargement'), err);
        
      });