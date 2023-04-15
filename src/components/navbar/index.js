import React, {useState} from "react";
import Logo from "../logo";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faFolder,
    faHome,
    faMessage,
    faSearch,
    faTableCellsLarge,
    faTag,
    faTimeline
} from "@fortawesome/free-solid-svg-icons";
import Link from "../link";
import "./index.css"
import {blogListProfiles} from "../../data/data";

function Navbar(){
    const [searchInput,setSearchInput] = useState("");
    const [filteredResults, setFilteredResults] = useState([]);

    const searchItems = (searchValue) => {
        searchValue.replace(/(^\s*)|(\s*$)/g, "");
        //setSearchInput(searchValue);
        if(searchValue){
            const filteredData = blogListProfiles.filter((item) => item.title.includes(searchValue.toLowerCase()));
            setFilteredResults(filteredData);
        }else {
            setFilteredResults([]);
        }
    }

    return (
        <div className="navbar">
            <Logo />
            <div className="links">
                <div className="color-pick"></div>
                <div className="search-box">
                    <FontAwesomeIcon icon={faSearch} className="search-icon"/>
                    <input aria-label="Search" list="search-advises" autoComplete="off" spellCheck="false" onChange={(e) => searchItems(e.target.value)} className=""/>
                    <datalist id="search-advises" className="search-advises">
                        {filteredResults.map((item) => <span><a href={"/blogs/" + item.title}>{item.title}</a></span>)}
                    </datalist>
                </div>
                <nav className="nav-link">
                    <Link icon={faHome} title="Home"/>
                    <Link icon={faTableCellsLarge} title="Category" isDictionary="true"/>
                    <Link icon={faTag} title="Tag"/>
                    <Link icon={faTimeline} title="Timeline"/>
                    <Link icon={faFolder} title="Docs" isDictionary="true"/>
                    <Link icon={faMessage} title="Contact" isDictionary="true"/>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;