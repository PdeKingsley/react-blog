import React from "react";
//import "./index.css";
import {Link} from "react-router-dom";
import {toolCategory,toolMap} from "../../data/toolbox";

function SidebarCollapse(){
    return (
        <ul className="">
            {toolCategory.map(category => {
                return <li><CollapseBlock category={category} /></li>
            })}
        </ul>
    );
}

function CollapseBlock({category}){
    const block = toolMap[category];

    return (
        <React.Fragment>
            <h3>{category}</h3>
            <ul className="">
                {
                    block.map(obj => {
                        return <li className=""><CollapseItem toolName={obj.toolName} url={obj.url}/></li>
                    })
                }
            </ul>
        </React.Fragment>
    );
}

function CollapseItem({toolName,url}){
    return (
        <Link to={url}>{toolName}</Link>
    );
}

export default SidebarCollapse;