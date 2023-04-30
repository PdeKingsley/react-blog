import React from "react";
import "./index.css"
import {Link} from "react-router-dom";

function CategoryLi({name,num}){
    let url = "/category/" + name;
    return (
        <li className="categories-item">
            <Link to={url}>
                <span className="category-name">{name}</span>
                <span className="category-li-post-num">{num}</span>
            </Link>
        </li>
    );
}

export default CategoryLi;