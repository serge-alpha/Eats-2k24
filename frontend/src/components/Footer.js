import React from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

const Footer=({user})=>{
    //user here is used to check if the user is a chef account and also to figure out which restaurant is thiers and which meals are.

    const citiesToAdd=()=>{
        toast("No new places avialable apart from Bili. If you need your city to be added,please contact us ",{
            position: "top-center",
            autoClose:false,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
            });
    }
    return(
        <footer className="home_footer">
        <div className="footer">
            <h2><a href="#top">Eats</a></h2>
            <span className="footer_links">
                <ul>
                    <li><a href={'mailto:"sergealpha12@gmail.com"'}>get Support</a></li>
                    {}
                    {user?<li><NavLink to={user.is_Chef?"/restaurant":"/add-restaurant"}><a href="#top">My restaurant</a></NavLink></li>:<></>}
                    <li><NavLink> Foods near me</NavLink></li>
                    <li onClick={citiesToAdd}><NavLink>Show all cities</NavLink></li>
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