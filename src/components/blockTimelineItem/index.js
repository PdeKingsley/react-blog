import React from "react";
import "./index.css";

function BlockTimelineItem({date,title}){
    let url = "/blogs/" + title;
    return (
        <div className="block-timeline-item">
            <a href={url}>
                <span className="timeline-date">{date}</span>
                <span className="timeline-title">{title}</span>
            </a>
        </div>
    );
}

export default BlockTimelineItem;