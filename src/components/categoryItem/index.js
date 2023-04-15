import React from "react";
import "./index.css"

function CategoryItem({categoryName,postNum}){
    let url = "/category/" + categoryName;

    return (
        <li key={categoryName} className="category-item">
            <a href={url}>
                <span className="category-name">{categoryName}</span>
                <span className="post-num">{postNum}</span>
            </a>
        </li>
    );
}

export default CategoryItem;