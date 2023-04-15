import React from "react";
import './index.css'
import {categoriesAll,categoriesMap} from "../../data/data";
import CategoryLi from "../categoryLi";
import BlogItem from "../blogItem";

function CategoryPage({blogListInCategory}){
    let categoriesUl = categoriesAll.map(name =>
        <CategoryLi name={name} num={categoriesMap.find(obj => obj.category === name)?.payload.length}/>
    );

    return (
        <div className="categories-wrapper">
            <div className="categories-payload">
                <ul className="categories-ul">
                    {categoriesUl}
                </ul>
                <div className="categories-list">
                    {blogListInCategory?.map(obj => <BlogItem title={obj.title} date={obj.date} tags={obj.tags}/>)}
                </div>
            </div>
        </div>
    );
}

export default CategoryPage;