import React from "react";
import "./index.css"
import {PUBLIC_URL} from "../../data/global";

function CategoryLi({name,num}){
    let url = PUBLIC_URL + "/category/" + name;
    return (
        <li className="categories-item">
            <a href={url}>
                <span className="category-name">{name}</span>
                <span className="category-li-post-num">{num}</span>
            </a>
        </li>
    );
}

export default CategoryLi;