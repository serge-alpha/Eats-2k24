import React from "react";
import FoodCards from "../components/FoodCards";
import Footer from "../components/Footer";


const Home =({getOrder})=>{
   
    return(
        <div className="body">
            <div className="home">
                <div className="quick_filter">
                    <span className="filter">
                        <div className="fast_food"></div>
                        <h5>FastFood</h5>
                    </span>
                    <span className="filter">
                        <div className="lunch" alt="lunch"></div>
                        <h5>Lunch</h5>
                    </span>
                    <span className="filter">
                        <div className="pastry" alt="pastries"></div> 
                        <h5>Pastries</h5>
                    </span>
                </div>
                <div className="category_filter">
                    <hr/>
                    <div className="dropdown_pannel_1">
                        <button className="dropbtn">Rating </button>
                            <div className="dropdown_content_1">
                                <p> 1 star</p>
                                <p> 2 star</p>
                                <p> 3 star</p>
                                <p> 4 star</p>
                                <p> 5 star</p>
                            </div>
                    </div>
                    <div className="dropdown_pannel_2">
                        <button className="dropbtn">Price </button>
                            <div className="dropdown_content_2">
                                <p>$</p>
                                <p>$$</p>
                                <p>$$$</p>
                            </div>
                    </div>
                    <div className="dropdown_pannel_3">
                        <button className="dropbtn">Sort </button>
                            <div className="dropdown_content_3">
                                <p> Deliver Now</p>
                                <p> Plan for later</p>
                            </div>
                    </div>
                    {/* <div className="dropdown_pannel">
                        <button className="dropbtn">Discounts </button>
                            <div className="dropdown_content">
                                <p> Deliver Now</p>
                                <p> Plan for later</p>
                            </div>
                    </div> */}
                </div>
                <div className="card_rows">
                    <h2><b>Deliveries for less than 1000 CFA</b></h2>
                    <FoodCards order={getOrder}/>
                </div>
                
            </div>
            <Footer/>
        </div>
        
    )
}

export default Home;