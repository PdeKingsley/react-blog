import React from "react";
import "./index.css";
import ToolboxLogo from "../../assets/images/toolbox.png"
import {Link} from "react-router-dom";

function ToolboxTopBar(){
    return (
        <div className="topBar-root">
            <div className="toolbar-wrapper">
                <div className="toolbar-leftBanner">
                    <span className="toolbox-logo">
                        <Link to={"/"}><img src={ToolboxLogo}/></Link>
                    </span>
                    <span className="toolbox-slogan">
                        PdeKingSley's Toolbox
                    </span>
                </div>
                <div className="toolbar-rightBanner">
                    <span>Powered by</span>
                </div>
            </div>
        </div>
    );
}

export default ToolboxTopBar;