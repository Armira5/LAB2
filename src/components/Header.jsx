import React from "react";
import {Link} from "react-router-dom";


export const Header = () =>{
    return <>
    <header>
    <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contactus">Contact Us</Link></li>
        <li><Link to="/login">Login</Link></li>
    </ul>
</header>
</>
}