import React from "react";
import "./Sidebar.css";
import Divider from "../Divider/Divider";

interface ISidebarProps {
    details: {
        FirstName: string;
        LastName: string;
    };
}

const Sidebar: React.FC<ISidebarProps> = ({details}) => {
    return (
        <>
            <p>First Name: {details.FirstName}</p>
            <Divider type="horizontal"></Divider>
            <p>Last Name: {details.LastName}</p>
        </>
    )
}

export default Sidebar;