import Cnn from "../assets/images/cnn.png"
import Times from "../assets/images/times.png"
import Image from "../assets/images/img-post.png"
import Twitter from "../assets/images/twitter-logo.png"
import Verified from "../assets/Icons/Verified.svg";
import More2 from "../assets/Icons/Others/More-2.svg"


export const data = [
    {
       id: 1,
       logo:Cnn,
       content:{
            body:{
                title:{
                    author:"CNN",
                    details:'@CNN',
                    details2:".",
                    details3:"7m"
                },
                text:"President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a major breakthrough that would serve to both strengthen the US steel industry and combat the global climate crisis.",
                image:""
            },
            actions:{
                action1:57,
                action2:144,
                action3:184,
                action4:""
            }
       }
    },
    {
       id: 2,
       logo:Times,
       content:{
            body:{
                title:{
                    author:"The New York Times",
                    details:'@nytimes',
                    details2:".",
                    details3:"2h"
                },
                text:"Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land.",
                image: Image
            },
            actions:{
                action1:19,
                action2:48,
                action3:482,
                action4:""
            }
       }
    },
    {
       id: 3,
       logo:Twitter,
       content:{
            body:{
                title:{
                    author:"Twitter",
                    details:'@Twitter',
                    details2:".",
                    details3:"Oct 29"
                },
                text:"BIG NEWS, Elon Musk bought Twitter 44 Billions dollars.",
                image:""
            },
            actions:{
                action1:"6.8K",
                action2:'36.6K',
                action3:'267.1K',
                action4:""
            }
       }
    },
    {
       id: 4,
       logo:Twitter,
       content:{
            body:{
                title:{
                    author:"Twitter",
                    details:'@Twitter',
                    details2:".",
                    details3:"Oct 4"
                },
                text:"hello litterally everyone",
                image:""
            },
            actions:{
                action1:"118.7k",
                action2:'785.4k',
                action3:'3.3M',
                action4:""
            }
       }
    },
    {
       id: 5,
       logo:Twitter,
       content:{
            body:{
                title:{
                    author:"Twitter",
                    details:'@Twitter',
                    details2:".",
                    details3:"Oct 4"
                },
                text:"hello literally everyone",
                image:""
            },
            actions:{
                action1:"",
                action2:'',
                action3:'',
                action4:""
            }
       }
    },
 ];
const data2=[
    {id:1,
    avatar:{Times},
    author:{
        name:'The New York Times',
        logo:{Verified},
        detail:'@nytimes'
    },
    },
    {id:2,
    avatar:{Cnn},
    author:{
        name:'CNN',
        logo:{Verified},
        detail:'@CNN'
    },
    },
    {id:3,
    avatar:{Twitter},
    author:{
        name:'Twitter',
        logo:{Verified},
        detail:'@Twitter'
    },
    },
];
export const trendsData = [
    {
        id: 1,
        icon:{More2},
        titreTrend:{
            titre1:"Trending in Turkey",
            titre2:"#SQUID",
            titre3:"2,066 Tweets",
             }
   
    },
    {id: 2,
    icon:{More2},
    titreTrend:{
        titre1:"Trending in Turkey",
        titre2:"#SQUID",
        titre3:"2,066 Tweets",
         },
  },
  {
    id: 3,
    icon:{More2},
    titreTrend:{
        titre1:"Trending in Turkey",
        titre2:"#SQUID",
        titre3:"2,066 Tweets",
         }
  }
] ;

export default data2;