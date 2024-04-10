import Header from "../composants/Header/Header";
import TweetEditor from "../composants/TweetEditor/TweetEditor";

function Profile(){
    return(

        <div className='timeline'>
        <Header />
        <TweetEditor/>
      </div>
    )
}

export default Profile;