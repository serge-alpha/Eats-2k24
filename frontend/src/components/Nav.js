 import React , { useState } from "react";
 import { AiOutlineUser } from "react-icons/ai";
 import { AiOutlineMenu} from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { MdRestaurantMenu } from "react-icons/md";
import { BsCart,BsFillCartFill,BsDot } from "react-icons/bs";

 const Nav =({order})=>{
        const getdate=(value)=>{
            let mm='', dd='';
            switch(value.getMonth() + 1){
                    case 1: mm = "Jan";
                        break;
                    case 2: mm = "Feb";
                        break;
                    case 3: mm = "March";
                        break;
                    case 4: mm = "April";
                        break;
                    case 5: mm = "May";
                        break;
                    case 6: mm = "June"; 
                        break;
                    case 7: mm = "July";
                        break;
                    case 8: mm = "August";
                        break;
                    case 9: mm = "Sept";
                        break;
                    case 10: mm = "Oct";
                        break;
                    case 11: mm = "Nov";
                        break;
                    case 12: mm = "Dec";
                        break;
                    default: break;
            }
            dd=value.getDate();
            return (String(dd + ' ' + mm));
        }
    const [orderType,setOrderType] = useState(0);
    const [orderTime,setOrderTime] = useState(0);
    const dateNow=getdate(new Date());
    const [location,setLocation]=useState('Italy');
    const[dateValue,setDateValue] = useState("Today");
    const[time,setTime] = useState(String((new Date().getUTCHours()+1)+':'+new Date().getUTCMinutes()));
/*=======================================================================================================*/
    
    const handleLocationChange=(event)=>{
        setLocation(event.target.value)
    }
    const handleDateChange=(event)=>{
        if(getdate(new Date(event.target.value))===dateNow) {
            setDateValue("Today");
        }else{
            setDateValue(getdate(new Date(event.target.value)))
        }   
    }
    const handleTimeChange=(event)=>{
        setTime(event.target.value)
    }
/*----------------------------------------------------------------*/

    const orderChoice=()=>{
        if (orderType===0){
            setOrderType(1);
        }else{
            setOrderType(0);
        }
    }

    const orderChoiceTime=()=>{
        if (orderTime===0){
            setOrderTime(1);
        }else{
            setOrderTime(0);
        }
    }
    const [menustate,setMenuState] = useState(0);
    const menuState=()=>{
        if (menustate===0){
            setMenuState(1);
        }else{
            setMenuState(0);
        }
    }

    const [editstate,setEditState] = useState(1);
    const editState=()=>{
        if (editstate===0){
            setEditState(1);
        }else{
            setEditState(0);
        }
    }   
    return(
        <div className="nav">
            <span className="nav_menu"><b className="nav_menubar" onClick={menuState}>{menustate===1?<MdRestaurantMenu />:<AiOutlineMenu/>}</b><NavLink to="/home"><h1>Eats</h1></NavLink></span>
            <div className="nav_navigation">
                <div className="nav_delivery">
                    {orderType===1?<><span onClick={()=>orderChoice()}>Delivery</span><span className="delivery" >Pickup</span></>:<><span className="delivery">Delivery</span><span onClick={()=>orderChoice()}>Pickup</span></>}
                </div>                
                {/* <input type="location"className="nav_location" placeholder={location +"    "+dateValue+" "+time }/> */}
                <p className="nav_location">{location}   {dateValue+" "+time }</p>
                <input type="search" className="nav_search" placeholder="Search Meal"/>     
            </div>
            {/* ===============================Nav menu on small screens======================================== */}
            <div className={menustate===0?"hide_nav_navigation_s":"nav_navigation_s"}>
                <div onClick={editState}>
                    <p>{orderType===1?<p>Pick up <BsDot />{dateValue} <BsDot/></p>:<p>Deliver<BsDot/> {dateValue}<BsDot/>{time}</p>}</p>
                    <p><p>{location}</p></p>
                </div>
                <input type="search" className="nav_search" placeholder="Search Meal"/>
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
                        <input type="date" name="date" onChange={handleDateChange}  className="login_input" placeholder="Date"/>
                        <input type="time" name="time" onChange={handleTimeChange}  className="login_input" placeholder="Time"/>
                    </div>:<></>}
                    <label htmlFor="location"/>
                    <input type="text" placeholder="Location" className="login_input" onChange={handleLocationChange} name="location" value={location} required/>
                    <button type="submit" className="button nav_edit_btn" onClick={editState}> <b>Done</b></button>
                </div>
            </div>
            <span>
                <NavLink to="/home-cart" className="nav_reg" >{order.length<1?<BsCart/>:<BsFillCartFill />}<p> Order</p></NavLink>
                <NavLink to="/login" className="nav_reg"><AiOutlineUser/><p> Register</p></NavLink>
            </span>
            
        </div>
    )
 }

 export default Nav;