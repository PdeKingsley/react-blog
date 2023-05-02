import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag,faClock } from '@fortawesome/free-solid-svg-icons'
import "./index.css"
import {Link} from "react-router-dom";

function BlogItem({title,date,tags}){
    let prefix = "/tag/"
    let tagItems = Array.from(tags).map(tag =>
            <span className="tag-item"><Link to={prefix + tag}>{tag}</Link></span>
        );

    let url = "/blogs/" + title;
    return (
        <div className="abstract-item">
            <div className="title">
                <Link to={url}>{title}</Link>
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