import './App.css';
import Link from "./components/link";
import NumItem from "./components/numItem";
import CategoryItem from "./components/categoryItem";
import TagItem from "./components/tagItem";
import BlogItem from "./components/blogItem";
import Navbar from "./components/navbar";
import Me from "./assets/images/Pixel_Me.png";
import {blogListProfiles, categoriesMap, tagsAll} from "./data/data";

import {
    faTableCellsLarge, faTag, faHeartbeat, faUsers,faCopyright,
} from '@fortawesome/free-solid-svg-icons'
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const banner = "世界线收束";
const motto = "experience the world, enjoy the life"
const articleNum = blogListProfiles.length,tagNum = tagsAll.length;
let numObj = [{num: articleNum, classification: "Articles"}, {num: tagNum, classification: "Tags"}];
//主页个人info categories list
let categoryObj = categoriesMap.
        map(obj => {return {categoryName: obj.category,postNum: obj.payload.length}}).
        filter((item,index) => index < 7);
//主页个人info tags list
let tagsObj = tagsAll.filter((item,index) => index < 15);

function App() {
    return (
            <div className="App">
                <header className="App-header">
                    <Navbar/>
                </header>
                <body className="App-body">
                <div className="home-blog">
                    <div className="hero">
                        <div>
                            <h1 className="banner">{banner}</h1>
                            <p className="motto">{motto}</p>
                        </div>
                    </div>
                    <div className="home-blog-wrapper">
                        <div className="blog-list">
                            <div className="abstract-wrapper">
                                {blogListProfiles.map(obj => <BlogItem tags={obj.tags} title={obj.title}
                                                                       date={obj.date}/>)}
                            </div>
                            <div className="pagation">
                                <div className="pagation-list">
                                    {/*<PaginationOutlined/>*/}
                                </div>
                            </div>
                        </div>
                        <div className="info-wrapper">
                            <div className="personal-info-warpper">
                                <img src={Me} alt="author-avatar" className="personal-img"/>
                                <div className="num">
                                    {numObj.map(obj => <NumItem num={obj.num} classification={obj.classification}/>)}
                                </div>
                                <ul className="social-links"></ul>
                                <hr/>
                            </div>
                            <h4>
                                <Link icon={faTableCellsLarge} title="Category"/>
                            </h4>
                            <ul className="category-wrapper">
                                {categoryObj.map(obj => <CategoryItem categoryName={obj.categoryName}
                                                                      postNum={obj.postNum}/>)}
                            </ul>
                            <hr/>
                            <h4><Link icon={faTag} title="tag"/></h4>
                            <div className="tags">
                                {tagsObj.map(obj => <TagItem title={obj}/>)}
                            </div>
                            <h4><Link icon={faHeartbeat} title="Friend Links"/></h4>
                            <div className="friendLink-wrapper">

                            </div>
                        </div>
                    </div>
                    <div className="home-center"></div>
                </div>
                </body>
                <footer className="App-footer">
          <span className="theme">
              <i className="footer-theme">
                  <FontAwesomeIcon icon={faUsers}/>
              </i>
              <a target="_blank" href="https://react.dev/">React.dev</a>
          </span>
                    <span className="copyright">
                <i className="copyright-icon">
                  <FontAwesomeIcon icon={faCopyright}/>
                </i>
                <span>From 2022</span>
          <span className="record">苏ICP备2023015917号</span>
            </span>
                    <span className="cap"></span>
                </footer>
            </div>);
}

export default App;
