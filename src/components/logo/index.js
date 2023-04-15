import React from "react";
import logo from "../../assets/images/logo.png"
import './index.css'

function Logo({link = "/"}){
    return (
        <a href={link}><img src={logo} alt="pdeKingSley's blog" className="App-logo"/></a>
    );
}

export default Logo;