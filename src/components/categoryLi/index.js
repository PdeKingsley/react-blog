import React from "react";
import "./index.css"

function CategoryLi({name,num}){
    let url = "/category/" + name;
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