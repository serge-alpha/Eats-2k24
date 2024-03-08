import React from "react";
import FoodCards from "../components/FoodCards";
import Footer from "../components/Footer";


const Home =()=>{
    return(
        <div className="body">
             {/* <FoodModal/>  */}
            <div className="home">
                <div className="quick_filter">
                    <span className="filter">
                    <img className="fast_food" alt="fastfood"/> 
                    <h5>FastFood</h5>
                    </span>
                    <span className="filter">
                    <img className="fast_food" alt="lunch"/> 
                    <h5>Lunch</h5>
                    </span>
                    <span className="filter">
                    <img className="fast_food" alt="pastries"/> 
                    <h5>Pastries</h5>
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
                    <h2><b>Deliveries for less than 1000 CFA</b></h2>
                    <FoodCards/>
                </div>
                
            </div>
            <Footer/>
        </div>
        
    )
}

export default Home;