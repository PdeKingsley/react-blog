import React from "react";
import "./index.css";
import {PUBLIC_URL} from "../../data/global";

function TagItem({title}){
    let url = PUBLIC_URL + "/tag/" + title;
    return (
        <span className="tag-title"><a href={url}>{title}</a></span>
    );
}

export default TagItem;