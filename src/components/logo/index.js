import React from "react";
import logo from "../../assets/images/logo.png"
import './index.css'
import {Link} from "react-router-dom";

function Logo({link = "/"}){
    return (
        <Link to={link}><img src={logo} alt="pdeKingSley's blog" className="App-logo"/></Link>
    );
}

export default Logo;