import React from "react";
import { NavLink } from "react-router-dom";
import FoodCards from "../components/FoodCards";

const Home =()=>{
    return(
        <div className="home">
            <div className="quick_filter">
                <span className="filter">
                  <img className="fast_food" alt="fastfood"/> 
                  <h4>FastFood</h4>
                </span>
                <span className="filter">
                  <img className="fast_food" alt="lunch"/> 
                  <h4>Lunch</h4>
                </span>
                <span className="filter">
                  <img className="fast_food" alt="pastries"/> 
                  <h4>Pastries</h4>
                </span>
            </div>
            <div className="category_filter">
                <hr/>
                <div className="dropdown_pannel1">
                    <button className="dropbtn">Rating </button>
                        <div className="dropdown_content1">
                            <p> Deliver Now</p>
                            <p> Plan for later</p>
                        </div>
                </div>
                <div className="dropdown_pannel">
                    <button className="dropbtn">Price </button>
                        <div className="dropdown_content">
                            <p> Deliver Now</p>
                            <p> Plan for later</p>
                        </div>
                </div>
                <div className="dropdown_pannel">
                    <button className="dropbtn">Sort </button>
                        <div className="dropdown_content">
                            <p> Deliver Now</p>
                            <p> Plan for later</p>
                        </div>
                </div>
                <div className="dropdown_pannel">
                    <button className="dropbtn">Discounts </button>
                        <div className="dropdown_content">
                            <p> Deliver Now</p>
                            <p> Plan for later</p>
                        </div>
                </div>
            </div>
            <div className="card_rows">
                <h2>Deliveries for less than 1000 CFA</h2>
                <FoodCards/>
            </div>
            <div className="home_footer">
                <div className="footer">
                    <h2>Eats</h2>
                    <span className="footer_links">
                        <ul>
                            <li><NavLink>get Support</NavLink></li>
                            <li><NavLink>Add your restaurant</NavLink></li>
                            <li><NavLink>Register</NavLink></li>
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
        </div>
    )
}

export default Home;