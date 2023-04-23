import React from "react";
import "./index.css";
import ToolboxTopBar from "../../components/toolboxtopbar";
import ToolboxSidebar from "../../components/toolboxSidebar";
import {Outlet} from "react-router-dom";

function Toolbox(){
    return (
        <div className="App">
            <ToolboxTopBar />
            <ToolboxSidebar />
            <div className="out">
                <Outlet />
            </div>
        </div>
    );
}

export default Toolbox;