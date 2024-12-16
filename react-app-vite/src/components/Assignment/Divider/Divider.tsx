import React from "react";
import "./Divider.css";

interface IDividerProps {
    type: 'horizontal' | 'vertical';
}

const Divider: React.FC<IDividerProps> = ({type}) => {
    return (
        <>
            {type === 'horizontal' ? <hr/> : <div className="vertical-divider" />}
        </>
    )
}

export default Divider;