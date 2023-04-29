import React from "react";
import "./index.css"
import {PUBLIC_URL} from "../../data/global";

function DropdownItem({category,item}){
    let url = "/" + category + "/" + item;
    return (
        <li className="dropdown-item">
            <a href={url} className="dropdown-item-link">{item}</a>
        </li>
    );
}

export default DropdownItem;