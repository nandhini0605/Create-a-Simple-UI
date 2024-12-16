import React from "react";
import "./Post.css";

interface IPostProps {
    details: {
        date: string;
        text: string;
    }
}

const Post: React.FC<IPostProps> = ({details}) => {
    return (
        <div>
        <p className="paraStyle">{details.text}</p>
        <p className="paraStyle">{details.date}</p>
        </div>
    )
}

export default Post;