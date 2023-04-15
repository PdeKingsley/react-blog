import React from "react";
import Navbar from "../../components/navbar";
import "./index.css";
import BlogPage from "../../components/blogPage";
import {blogsMap} from "../../data/data";
import {useParams} from "react-router-dom";

function Blog(){
    const params = useParams()
    let blogObj = blogsMap.find(obj => obj.title === params["title"])?.payload;

    return (
        <div className="App">
            <Navbar />
            <BlogPage blogObj={blogObj}/>
        </div>
    );
}

export default Blog;