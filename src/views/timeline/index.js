import React from "react";
import Navbar from "../../components/navbar";
import ColorsTimeline from "../../components/colorsTimeline";
import "./index.css";

function Timeline(){
    return (
        <div className="App">
            <Navbar />
            <div className="timeline-wrapper">
                <ColorsTimeline />
            </div>
        </div>
    );
}

export default Timeline;