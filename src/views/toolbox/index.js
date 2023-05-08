import React from "react";
import "./index.css";
import ToolboxTopBar from "../../components/toolboxtopbar";
import ToolboxSidebar from "../../components/toolboxSidebar";
import {Outlet} from "react-router-dom";
import {SWRConfig} from "swr";

function Toolbox(){
    return (
        <SWRConfig value={{
            fetcher: (resource,init) => fetch(resource,init).then(res => res.json())
        }}>
            <div className="App">
                <ToolboxTopBar />
                <ToolboxSidebar />
                <div className="out">
                    <Outlet />
                </div>
            </div>
        </SWRConfig>
    );
}

export default Toolbox;