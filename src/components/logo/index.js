import React from "react";
import logo from "../../assets/images/logo.png"
import './index.css'
import {PUBLIC_URL} from "../../data/global";

function Logo({link = PUBLIC_URL + "/"}){
    return (
        <a href={link}><img src={logo} alt="pdeKingSley's blog" className="App-logo"/></a>
    );
}

export default Logo;