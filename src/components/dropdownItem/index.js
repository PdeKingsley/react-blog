import React from "react";
import "./index.css"
import {Link} from "react-router-dom";

function DropdownItem({category,item}){
    let url = "/" + category + "/" + item;
    return (
        <li className="dropdown-item">
            <Link to={url} className="dropdown-item-link">{item}</Link>
        </li>
    );
}

export default DropdownItem;