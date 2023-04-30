import React from "react";
import "./index.css"
import {Link} from "react-router-dom";

function CategoryItem({categoryName,postNum}){
    let url = "/category/" + categoryName;

    return (
        <li key={categoryName} className="category-item">
            <Link to={url}>
                <span className="category-name">{categoryName}</span>
                <span className="post-num">{postNum}</span>
            </Link>
        </li>
    );
}

export default CategoryItem;