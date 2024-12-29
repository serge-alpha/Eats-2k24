import React, { useEffect, useState } from "react";
import FoodCards from "../components/FoodCards";
import Footer from "../components/Footer";
import { getAllMeals } from "../services/meal";
import { Slide, ToastContainer, toast } from "react-toastify";
import { getAllRest } from "../services/rest";
// import { FaStar } from "react-icons/fa";


const Home =({user,filter})=>{
    const [chefs,setChefs]=useState([]);
    const [userdata,setUserData]=useState();
    //const[mealStatus,setMealStatus]=useState(false);

    const[mealList,setMeals] =useState([]);
    
    

    useEffect(()=>{
        const getmeals=async()=>{
             const list =await getAllMeals();
             setMeals(list.meals);
        }
        const fetch=async()=>{
            try {
                const Chef= await getAllRest();
                setChefs(Chef.rest);
                
            } catch (error) {
                toast(error.msg, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "colored",
                    transition: Slide
                    });
            }
            setUserData(user);
        };
        getmeals();
        fetch();
       
    },[user,userdata]);
    return(
        <div className="body" id="top">
            <ToastContainer position="top-right"
                        autoClose={5000}
                        hideProgressBar
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="colored"
                        />
            <div className="home" >
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
                {/* --------------------- this section is to be added in the next release --------------------
                    <div className="dropdown_pannel_1">
                        <button className="dropbtn">Rating </button>
                            <div className="dropdown_content_1">
                                <p><s><FaStar/></s></p>
                                <p><FaStar/><FaStar/></p>
                                <p><FaStar/><FaStar/><FaStar/></p>
                                <p><FaStar/><FaStar/><FaStar/><FaStar/></p>
                                <p><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
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
                    <div className="dropdown_pannel">
                        <button className="dropbtn">Discounts </button>
                            <div className="dropdown_content">
                                <p> Deliver Now</p>
                                <p> Plan for later</p>
                            </div>
                    </div>  */}
                </div>
                <div className="card_rows">
                    {/* <h2><b>Deliveries for less than 1000 CFA</b></h2> */}
                    <FoodCards meals={mealList} chefs={chefs} filter={filter}/>
                </div>
                
            </div>
            <Footer user={userdata}/>
        </div>
        
    )
}

export default Home;