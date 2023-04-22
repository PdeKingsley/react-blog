import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock, faTag} from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import { marked } from "marked";

function BlogPage({blogObj}){
    const parseContent = marked.parse(blogObj.content);

    return (
        <div className="blog-page-wrapper">
            <main className="page">
                <section className="page-section">
                    <div className="page-title">
                        <h1 class="h1-title">{blogObj.title}</h1>
                        <div className="blog-descriptions">
                            <i className="iconfont">
                                <FontAwesomeIcon icon={ faClock } />
                                <span className="time">{blogObj.date}</span>
                            </i>
                            <i className="iconfont">
                                <FontAwesomeIcon icon={ faTag } />
                                {blogObj.tags.map((tag) => String.fromCodePoint('0x1F60F') + tag + '   ')}
                            </i>
                        </div>
                    </div>
                    <div className="content-default" dangerouslySetInnerHTML = {{__html: parseContent}}>

                    </div>
                </section>
                <footer className="page-edit">
                    <div className="last-updated">
                        <span className="prefix">Last Updated: </span>
                        <span className="time">{blogObj.date}</span>
                    </div>
                </footer>
            </main>
        </div>
    );
}

export default BlogPage;