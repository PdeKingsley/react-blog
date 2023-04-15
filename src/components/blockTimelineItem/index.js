import React from "react";
import "./index.css";
import {PUBLIC_URL} from "../../data/global";

function BlockTimelineItem({date,title}){
    let url =  PUBLIC_URL + "/blogs/" + title;
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