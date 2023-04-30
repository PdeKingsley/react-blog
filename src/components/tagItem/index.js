import React from "react";
import "./index.css";
import {Link} from "react-router-dom";

function TagItem({title}){
    let url = "/tag/" + title;
    return (
        <span className="tag-title"><Link to={url}>{title}</Link></span>
    );
}

export default TagItem;