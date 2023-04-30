import React from "react";
import "./index.css";
import {Link} from "react-router-dom";

function BlockTimelineItem({date,title}){
    let url = "/blogs/" + title;
    return (
        <div className="block-timeline-item">
            <Link to={url}>
                <span className="timeline-date">{date}</span>
                <span className="timeline-title">{title}</span>
            </Link>
        </div>
    )
}

export default BlockTimelineItem;