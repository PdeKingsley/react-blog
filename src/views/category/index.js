import React from "react";
import Navbar from "../../components/navbar";
import "./index.css"
import CategoryPage from "../../components/categoryPage";
import {useParams} from "react-router-dom";
import {categoriesMap} from "../../data/data";

function Category(){
    const params = useParams();
    let blogListInCategory = categoriesMap.find(obj => obj.category === params["category"])?.payload;

    return (
        <div className="App">
            <CategoryPage blogListInCategory={blogListInCategory}/>
            <Navbar />
        </div>
    );
}

export default Category;