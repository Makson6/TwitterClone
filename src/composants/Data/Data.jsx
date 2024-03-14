import cnn from "../../assets/images/cnn.png"
import times from "../../assets/images/times.png"
import image from "../../assets/images/img-post.png"
import twitter from "../../assets/images/twitter-logo.png"

export const data = [
    {
       id: 1,
       logo:cnn,
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
       logo:times,
       content:{
            body:{
                title:{
                    author:"The New York Times",
                    details:'@nytimes',
                    details2:".",
                    details3:"2h"
                },
                text:"Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land.",
                image: image
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
       logo:twitter,
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
       logo:twitter,
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
       logo:twitter,
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