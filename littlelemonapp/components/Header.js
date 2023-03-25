import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return(
    <header>
        <div className="left">
            <h1>Little Lemon</h1>
            <h2>Chicago, Illinois, United States</h2>
            <p>
            We are a family owned Mediterranean restaurant, focused on traditional
            recipes served with a modern twist.
            </p>
            <button>
                <Link to="/booking">Reserve a table</Link>
            </button>
        </div>
        <div className="right">
            <img alt="" src=""></img>
        </div>
    </header>);
}

export default Header;