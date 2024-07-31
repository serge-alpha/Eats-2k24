
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { verifyUser } from "../services/users";



const Verify=()=>{
    const params =useParams()
    const navigate=useNavigate()
    const token=params.token;

const handleSubmit=async(event)=>{
    event.preventDefault();
    try {
      const result=await verifyUser(token);
      toast(result.message)
      navigate('/login')

    } catch (error) {
        alert(error)
    }
}

    return(
        <div className="login_container">
            <div className="login_form">
                <h3>Click the botton below to activate your account</h3>
                <hr></hr>
                <button type="submit" className="button login_btn" onClick={handleSubmit} ><b>Activate</b></button> 
            </div>
            
        </div>
         
    )
}

export default Verify;