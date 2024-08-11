import React from "react";
import { NavLink } from "react-router-dom";

const Footer=({user})=>{

    
    return(
        <footer className="home_footer">
        <div className="footer">
            <h2><a href="#top">Eats</a></h2>
            <span className="footer_links">
                <ul>
                    <li><a href={'mailto:"sergealpha12@gmail.com"'}>get Support</a></li>
                    {}
                    {user?<li><NavLink to={user.is_Chef?"/restaurant":"/add-restaurant"}>My restaurant</NavLink></li>:<></>}
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
    </footer>
    )
}

export default Footer;