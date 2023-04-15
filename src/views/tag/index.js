import React from "react";
import Navbar from "../../components/navbar";
import "./index.css"
import TagPage from "../../components/tagPage";
import {useParams} from "react-router-dom";
import {tagsMap} from "../../data/data";

function Category(){
    const params = useParams()
    let blogListInTag = tagsMap.find(obj => obj.tag === params["tag"])?.payload;

    return (
        <div className="App">
            <Navbar />
            <TagPage blogListInTag={blogListInTag}/>
        </div>
    );
}

export default Category;