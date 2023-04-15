import React from "react";
import "./index.css";

function NumItem({num,classification}){
    return (
        <div className="numItem-wrapper">
            <h3>{num}</h3>
            <h6>{classification}</h6>
        </div>
    );
}

export default NumItem;