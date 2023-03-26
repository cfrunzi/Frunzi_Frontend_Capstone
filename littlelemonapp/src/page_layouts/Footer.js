import React from "react";
import "./Footer.css";

const Footer = () =>{
    return(
    <footer>
        <nav>
            <h3>Contact Us</h3>
            <ul>
                <li>Address: 345 Little Test Street </li>
                <li>Email: order@littlelemon.com</li>
                <li>Phone: 312 924 0000</li>
            </ul>
        </nav>
        <nav>
            <h3>Hours</h3>
            <ul>
                <li>Monday - Friday: 10:00 - 22:00</li>
                <li>Saturday - Sunday: 11:00 - 23:00 </li>
            </ul>
        </nav>
    </footer>);
}

export default Footer;