import Tweeter from "../../assets/Icons/Others/Twitter.svg"
import HomeFill from "../../assets/Icons/Others/Home-Fill.svg"
import Explore from "../../assets/Icons/Others/Explore.svg"
import Notifications from "../../assets/Icons/Others/Notifications.svg"
import Message from "../../assets/Icons/Others/Messages.svg"
import Bookmarks from "../../assets/Icons/Others/Bookmarks.svg"
import Lists from "../../assets/Icons/Others/Lists.svg"
import Profile from "../../assets/Icons/Others/Profile.svg"
import More from "../../assets/Icons/Others/More.svg"
import More2 from "../../assets/Icons/Others/More-2.svg"
import Private from "../../assets/Icons/Others/Private.svg"
import ProfilePhoto from "../../assets/Profile-Photo.svg"
import { Link } from "react-router-dom"
import "../../Styles/SideBar.css"

export default function SideBar() {
    return (
        
        <div className="sidebar">
            <div className="sidebar-content">

                <Link to="">
                    <img src={Tweeter} alt="" />
                </Link>
                <Link to="/">
                    <div className="side-nav">
                        <img src={HomeFill} alt="" />
                        <h1 className="page-title-sidebar">Home</h1>
                    </div>
                </Link>



                <Link to="/explore">
                    <div className="side-nav">
                        <img src={Explore} alt="" />
                        <h1 className="page-title-sidebar">Explore</h1>
                    </div>
                </Link>


                <Link to="/notifications">
                    <div className="side-nav">
                        <img src={Notifications} alt="" />
                        <h1 className="page-title-sidebar">Notifications</h1>
                    </div>
                </Link>



                <Link to="/messages">
                    <div className="side-nav">
                        <img src={Message} alt="" />
                        <h1 className="page-title-sidebar">Messages</h1>
                    </div>
                </Link>


                <Link to="/bookmarks">
                    <div className="side-nav">
                        <img src={Bookmarks} alt="" />
                        <h1 className="page-title-sidebar">Bookmarks</h1>
                    </div>
                </Link>


                <Link to="/lists">
                    <div className="side-nav">
                        <img src={Lists} alt="" />
                        <h1 className="page-title-sidebar">Lists</h1>
                    </div>
                </Link>


                <Link to="/profile">
                    <div className="side-nav">
                        <img src={Profile} alt="" />
                        <h1 className="page-title-sidebar">Profile</h1>
                    </div>
                </Link>


                <Link to="/more">
                    <div className="side-nav">
                        <img src={More} alt="" />
                        <h1 className="page-title-sidebar">More</h1>
                    </div>
                </Link>

                <button className="buttonS">Tweet</button>
            </div>
            <div className="user-footer">
                <img src={ProfilePhoto} alt="" />
                <div className="footer-content">
                    <div className="footer-cont">
                        <p className="footer-cont">BradleyOrtiz {<img src={Private}/>}</p>
                    
                        </div>
                   <p className="tweet-title-details"> @Bradley_</p>
                </div>
                    <img className="img" src={More2} alt="" />
            </div>

        </div>
    
    );
}


