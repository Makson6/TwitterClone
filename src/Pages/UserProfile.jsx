import ProfilePhoto from "../assets/Profile-Photo.svg"
import TweetEditor from "../composants/TweetEditor/TweetEditor";
import Header from "../composants/Header/Header";
function UserProfile(posts){
  console.log(posts);
    return(
         <div className="timeline">
                <Header/>
        <div className="tweet">
            <div className="tweet-avatar">
            <img  className="tweet-avatar" src={ProfilePhoto} alt="" />
                </div>
            <div className="tweet-content">
            <div className="tweet-body">
                 <div className="tweet-title">
                    <div className="tweet-title-author"><p>BradleyOrtiz </p></div>
                    <div className="tweet-title-details"><p> @Bradley_</p></div>
                 </div>
                 <div className="tweet-text"></div>
                 <div className="tweet-image"></div>

            </div>
            <div className="tweet-actions">

            </div>
            
            </div>
          </div>
                   <TweetEditor/>
        </div>
    //   <div className="timeline">
    //    <div className="tweet">
    //      
    //                 <div className="tweet-title">
    //       
    //       
    //       </div>
    //       <div className="tweet-content">
           
    //        <TweetEditorForm/>
    //        </div>
    //     </div>
    
    )
}

export default UserProfile;