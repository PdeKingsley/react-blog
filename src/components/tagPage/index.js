import React from "react";
import "./index.css";
import {tagsAll,blogListProfiles} from "../../data/data";
import TagItem from "../tagItem";
import BlogItem from "../blogItem";

function TagPage({blogListInTag = blogListProfiles}){
    return (
        <div className="tags-wrapper">
            <div className="tags-payload">
                <div className="tags">
                    {tagsAll.map(tag => <TagItem title={tag}/>)}
                </div>
                <div className="tag-blog-list">
                    {blogListInTag.map(obj => <BlogItem tags={obj.tags} title={obj.title} date={obj.date}/>)}
                </div>
            </div>
        </div>
    );
}

export default TagPage;