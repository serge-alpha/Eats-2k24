import React from "react";
import { NavLink } from "react-router-dom";

const Footer=()=>{
    return(
        <div className="home_footer">
        <div className="footer">
            <h2>Eats</h2>
            <span className="footer_links">
                <ul>
                    <li><NavLink>get Support</NavLink></li>
                    <li><NavLink to="/add-restaurant">Add your restaurant</NavLink></li>
                    <li><NavLink to="/register">Register</NavLink></li>
                </ul>
            </span>
            <span className="footer_links">
                <ul>
                    <li><NavLink> Foods near me</NavLink></li>
                    <li><NavLink>Show all cities</NavLink></li>
                </ul>
            </span>
        </div>
        <span className="footer_socials">
            .......Made with Bits
        </span>
    </div>
    )
}

export default Footer;