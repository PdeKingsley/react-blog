import React from "react";
import "./index.css";

function TagItem({title}){
    let url = "/tag/" + title;
    return (
        <span className="tag-title"><a href={url}>{title}</a></span>
    );
}

export default TagItem;