import "./Styles/App.css";
import Timeline from "./Timeline";
import SideBar from "./composants/SideBar/SideBar";
import Trends from "./composants/Trends/Trends";

function App (){
  
  return (
    <>
      <SideBar />
      <Timeline />
      <Trends />  
    </>
  )
}
export default App 