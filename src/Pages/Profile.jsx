import Header from "../composants/Header/Header";
import TweetEditor from "../composants/TweetEditor/TweetEditor";

import "../Styles/App.css"
function Profile(){
    return(

        <div className='timeline'>
        <Header />
        <TweetEditor/>
      </div>
    )
}

export default Profile;