import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag,faClock } from '@fortawesome/free-solid-svg-icons'
import "./index.css"
import {PUBLIC_URL} from "../../data/global";

function BlogItem({title,date,tags}){
    let prefix = PUBLIC_URL + "/tag/"
    let tagItems = Array.from(tags).map(tag =>
            <span className="tag-item"><a href={prefix + tag}>{tag}</a></span>
        );

    let url = PUBLIC_URL + "/blogs/" + title;
    return (
        <div className="abstract-item">
            <div className="title">
                <a href={url}>{title}</a>
            </div>
            <div className="abstract"></div>
            <div className="tag-wrapper">
                <i className="iconfont">
                    <FontAwesomeIcon icon={ faClock } />
                    <span className="time">{date}</span>
                </i>
                <i className="iconfont">
                    <FontAwesomeIcon icon={ faTag } />
                    {tagItems}
                </i>
            </div>
        </div>
    );
}

export default BlogItem;