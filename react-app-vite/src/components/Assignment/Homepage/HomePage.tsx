import Newsfeed from "../Newsfeed/Newsfeed";
import Sidebar from "../Sidebar/Sidebar";
import "./Homepage.css";

const HomePage = () => {
    return (
    <div className="container">
    <div  className="sidebar">
      <p style={{fontSize:20, fontWeight:'bold'}}>About Me</p>
      <Sidebar details={{FirstName: "Rysh", LastName: "Magbanua"}}>
      </Sidebar>
    </div>
    <div className="newsfeed">
      <Newsfeed 
      posts={[{date: "2020-10-23", text: "ReactJS"}, {date: "2021-10-23", text: "Facebook"}]}>
      </Newsfeed>
    </div>
    </div>
    )
}

export default HomePage;