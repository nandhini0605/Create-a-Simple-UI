import React from "react";
import "./index.css";
import Divider from "../Divider/Divider";

interface INavBarProps {
    buttons: string[];
    selected: string;
}

const NavBar: React.FC<INavBarProps> = ({buttons, selected}) => {
    return (
        <>
        {buttons.map((button,index) => (
            <div key={index} style={{display: "inline-block"}}>
            <button key={index} className = {selected === button ? "select" : ""}>
                {button}
            </button>
            <Divider type="vertical"></Divider>
            </div>
        ))}
        </>
        
    )
}

export default NavBar;