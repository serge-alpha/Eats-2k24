import React from "react";
import { NavLink } from "react-router-dom";

const Footer=()=>{
    return(
        <div className="home_footer">
        <div className="footer">
            <h2><a href="#top">Eats</a></h2>
            <span className="footer_links">
                <ul>
                    <li><a href={'mailto:"sergealpha12@gmail.com"'}>get Support</a></li>
                    <li><NavLink to="/add-restaurant">My restaurant</NavLink></li>
                    <li><NavLink to="/register">Register</NavLink></li>
                    <li><NavLink> Foods near me</NavLink></li>
                    <li><NavLink>Show all cities</NavLink></li>
                </ul>
            </span>
            <span className="footer_links">
                <ul>
                   
                </ul>
            </span>
        </div>
        <span className="footer_socials">
            <p>If you have any questions, please feel free to contact<a href={'mailto:"sergealpha12@gmail.com"'}> Serge</a></p>
        </span>
    </div>
    )
}

export default Footer;