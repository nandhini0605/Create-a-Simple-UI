import React from "react";
import "./index.css";
import Post from "../Post/Post"; 

interface INewsfeedProps {
    posts: {date: string; text: string}[];
}

const Newsfeed:React.FC<INewsfeedProps> = ({posts}) => {
    return (
        <>
            <p className="paraStyle">News Feed</p>
            <input/>
            <br/>
            <button className="buttonStyle">Add Post</button>
            <>
                {posts.map((i,index) => (
                    <div key={index} style={{backgroundColor: 'white', borderRadius: 10}}>
                    <Post details={i}></Post>
                    </div>
                ))} 
            </>
            <div>

            </div>
        </>
    )
}

export default Newsfeed;