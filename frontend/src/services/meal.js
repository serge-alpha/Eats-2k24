import axios from "axios"

export const createMeal=async(data)=>{
    try {
        const response=await axios.post('http://localhost:3001/api/user',data,{
            withCredentials:true
        } );
        return( response.data)
    } catch (error) {
       return(error.response.data.error.message)
    }
}