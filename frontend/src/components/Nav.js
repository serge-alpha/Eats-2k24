 import React , { useEffect, useState } from "react";
 import { AiOutlineUser } from "react-icons/ai";
//  import { AiOutlineMenu} from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
// import { MdRestaurantMenu } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { GrRestaurant } from "react-icons/gr";
import { IconContext } from "react-icons";
// import { BsCart,BsFillCartFill,BsDot } from "react-icons/bs";
import { BsCart,BsFillCartFill} from "react-icons/bs";
import { LogOutUser } from "../services/users";
import { useSelector } from "react-redux";

 const Nav =({isLogin,setIsLogin,getFilterValue,user})=>{
    const navigate=useNavigate([]);
    const [userdata,setUserData]=useState();
    useEffect(()=>{
        setUserData(user)
    },[user]);
    const {meals} = useSelector(status=>status.meal);
    // const [filter,setFilter]=useState('');
    // const setFilterValue=()=>{
    //     getFilterValue(filter);
    // }
    //Assigning month number to thier abrbrevations
        // const getdate=(value)=>{
        //     let mm='', dd='';
        //     switch(value.getMonth() + 1){
        //             case 1: mm = "Jan";
        //                 break;
        //             case 2: mm = "Feb";
        //                 break;
        //             case 3: mm = "March";
        //                 break;
        //             case 4: mm = "April";
        //                 break;
        //             case 5: mm = "May";
        //                 break;
        //             case 6: mm = "June"; 
        //                 break;
        //             case 7: mm = "July";
        //                 break;
        //             case 8: mm = "August";
        //                 break;
        //             case 9: mm = "Sept";
        //                 break;
        //             case 10: mm = "Oct";
        //                 break;
        //             case 11: mm = "Nov";
        //                 break;
        //             case 12: mm = "Dec";
        //                 break;
        //             default: break;
        //     }
        //     dd=value.getDate();
        //     return (String(dd + ' ' + mm));
        //}
    // const [orderType,setOrderType] = useState(0);
    // const [orderTime,setOrderTime] = useState(0);
    // const dateNow=getdate(new Date());
    // const [location,setLocation]=useState('Italy');
    // // const[dateValue,setDateValue] = useState("Today");
    // const[time,setTime] = useState(String((new Date().getUTCHours()+1)+':'+new Date().getUTCMinutes()));
/*=======================================================================================================*/
    //setting corresponding values to location, data and time 
    // const handleLocationChange=(event)=>{
    //     setLocation(event.target.value)
    // }
    // const handleDateChange=(event)=>{
    //     if(getdate(new Date(event.target.value))===dateNow) {
    //         setDateValue("Today");
    //     }else{
    //         setDateValue(getdate(new Date(event.target.value)))
    //     }   
    // }
    // const handleTimeChange=(event)=>{
    //     setTime(event.target.value)
    // }
/*----------------------------------------------------------------*/
//to handle devilery or pickup order choice 
    // const orderChoice=()=>{
    //     if (orderType===0){
    //         setOrderType(1);
    //     }else{
    //         setOrderType(0);
    //     }
    // }
//to handle now or later selected
    // const orderChoiceTime=()=>{
    //     if (orderTime===0){
    //         setOrderTime(1);
    //     }else{
    //         setOrderTime(0);
    //     }
    // }
//to toggle menue dropdown on mobile devices or small devices
    const [menustate,setMenuState] = useState(0);
    const menuState=()=>{
        if (menustate===0){
            setMenuState(1);
        }else{
            setMenuState(0);
        }
    }
//toggle order state from show just menue to show fields to edit order   
    // const [editstate,setEditState] = useState(0);
    // const editState=()=>{
    //     if (editstate===0){
    //         setEditState(1);
    //     }else{
    //         setEditState(0);
    //     }
    // }   

    const LoginLogout=async()=>{
        if (isLogin){
            await LogOutUser();
            setIsLogin(false);
            navigate('/');
        }else{
            navigate("/login");
        }
    }
 console.log(userdata);
    return(
        <div className="nav">
            <span className="nav_menu"><b className="nav_menubar" onClick={menuState}>
            {/* small Navs */}
               {/* {isLogin? <>{menustate===1?<MdRestaurantMenu />:<AiOutlineMenu/>}</>:<></>} */}
               </b>
                <NavLink to="/home" href="#home" >
                   <h1 >Eats</h1>
                </NavLink>
            </span>
            {isLogin?<div className="nav_navigation">
                {/* Nav time and location */}
                {/* <div className="nav_delivery">
                    {orderType===1?<><span onClick={()=>orderChoice()}>Delivery</span><span className="delivery">Pickup</span></>:<><span className="delivery">Delivery</span><span onClick={()=>orderChoice()}>Pickup</span></>}
                    <p  onClick={menuState} className="nav_location">{location}   {dateValue+" "+time }</p>
                </div>                 */}
                {/* <input type="location"className="nav_location" placeholder={location +"    "+dateValue+" "+time }/> */}
                
                <input type="search" className="nav_search" placeholder="Search Meal" onChange={(e) => {getFilterValue(e.target.value);}}/>     
            </div>:<></>}
            {/* ===============================Nav menu on small screens======================================== */}
            {/* small Navs */}
            {/* <div className={menustate===0?"hide_nav_navigation_s":"nav_navigation_s"}>
                
                <form onSubmit={setFilterValue()} autoComplete="off">
                    <div className="autocomplete">
                        <input type="search" className="nav_search" placeholder="Search Meal" onChange={(e) => setFilter(e.target.value)}/>
                    </div>
                </form>                
                <div onClick={editState} >
                    <span className="nav_order">
                        {orderType===1?<p>Pick up <BsDot />{dateValue} <BsDot/></p>:<p>Deliver<BsDot/> {dateValue}<BsDot/>{time}</p>}
                        <p>{location}</p>
                    </span>
                </div>
                {editstate===0?<p className="nav_order_info">Click above text to change details</p>:<></>}

                <hr/>
                <div className={editstate===0?"hide_nav_edit":"nav_edit"}>
                    <h4>Delivery Type</h4>
                    <div className="nav_delivery">
                        {orderType===1?<><span onClick={()=>orderChoice()}>Delivery</span><span className="delivery" >Pickup</span></>:<><span className="delivery">Delivery</span><span onClick={()=>orderChoice()}>Pickup</span></>}
                    </div>
                    <div className="nav_delivery">
                        {orderTime===1?<><span onClick={()=>orderChoiceTime()}>Now</span><span className="delivery" >Later</span></>:<><span className="delivery">Now</span><span onClick={()=>orderChoiceTime()}>Later</span></>}
                    </div>
                    {orderTime===1?<div className="nav_edit_date">
                        <p>Date</p>
                        <input type="date" name="date" onChange={handleDateChange}  className="login_input" placeholder="Date"/>
                        <p>Time</p>
                        <input type="time" name="time" onChange={handleTimeChange}  className="login_input" placeholder="Time"/>
                    </div>:<></>}
                    <label htmlFor="location"/>
                    <input type="text" placeholder="Location" className="nav_search" onChange={handleLocationChange} name="location" value={location} required/>
                    <button type="submit" className="button nav_edit_btn" onClick={editState}> <b>Done</b></button>
                </div>
            </div> */}
            {/* ===============================Nav menu on Large screens className={menustate===0?"hide_nav_navigation_s":"nav_navigation_s"}======================================== */}
            {/* <div className={menustate===1?"modal":"hide_nav_navigation_s"}>   
                <hr></hr>             
                <div className="nav_edit">
                   <div className="nav_edit_date">
                        <p>Date</p>
                        <input type="date" name="date" onChange={handleDateChange}  className="login_input" placeholder="Date" id="date"/>
                        <p>Time</p>
                        <input type="time" name="time" onChange={handleTimeChange}  className="login_input" placeholder="Time" value={time}/>
                    </div>
                    <label htmlFor="location"/>
                    <p>Location</p>
                    <input type="text" placeholder="Location" className="login_input" onChange={handleLocationChange} name="location" value={location} required/>
                    <hr></hr>
                    <button type="submit" className="button nav_edit_btn" onClick={menuState}> <b>Done</b></button>
                </div>
            </div>*/}
            
            <span>
                {isLogin?<button className="button"><NavLink to="/home-cart" className="nav_reg" >{meals.length<1?
                <IconContext.Provider value={{size:"1.3rem"} }>
                    <BsCart/>
                </IconContext.Provider>:<IconContext.Provider value={{color:"#e9981e", size:"1.3rem"} }>
                    <BsFillCartFill />
                </IconContext.Provider>}</NavLink></button>:<></>}
                {isLogin?<button className="button"><NavLink to={userdata.is_Chef?"/restaurant":"/add-restaurant"}  className="nav_reg" ><IconContext.Provider value={{size:"1.3rem"} }>
                <GrRestaurant/>
                </IconContext.Provider><p> Restaurant</p></NavLink></button>:<></>}
                <button onClick={LoginLogout} className="button">
                    {isLogin?<NavLink className="nav_reg"><IconContext.Provider value={{size:"1.3rem"} }>
               <CiLogout/>
            </IconContext.Provider><p>Logoout</p></NavLink>:<NavLink className="nav_reg"><IconContext.Provider value={{size:"1.3rem"} }>
                <AiOutlineUser/>
            </IconContext.Provider><p>Login</p></NavLink>}
                </button>
            </span>
            
        </div>
    )
 }

 export default Nav;