import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faSortDesc } from '@fortawesome/free-solid-svg-icons'
import DropdownItem from "../dropdownItem";
import { mockMap } from "../../data/mock";
import "./index.css"

function Link({title,icon,isDictionary = false}){
    const homeColor = title === "Home" ? {color:"#3eaf7c"} : {};
    let path = "/" + title.toLowerCase();
    return (
        <div className="nav-item">
            <div className="dropdown-wrapper">
                <a href={path} className="link" style={homeColor} isDictionary={isDictionary}>
                    <FontAwesomeIcon icon={icon || faCoffee} className="link-icon" style={homeColor}/>
                    {title}
                    {isDictionary && <FontAwesomeIcon icon={faSortDesc} className="arrow-right"/>}
                </a>
                <ul className="nav-dropdown">
                    {isDictionary && mockMap[title]?.map(item =>
                        <DropdownItem category={title} item={item}/>)}
                </ul>
            </div>
        </div>
    );
}

export default Link;