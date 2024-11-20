import axios from "axios"

export const createRest=async(data)=>{
    try {
        const response=await axios.post('https://eatsbackend.onrender.com/api/restuarant',data,{
            withCredentials:true
        } );
        return( response.data)
    } catch (error) {
       return  error.response.data;
    }
}

export const getAllRest=async()=>{
    try {
        const response=await axios.get(`https://eatsbackend.onrender.com/api/restuarant`);
        return(response.data)
    } catch (error) {
        throw error.response.data;
    }
}

export const UpdateRest=async(data,id)=>{
    try {
        const response=await axios.put(`https://eatsbackend.onrender.com/api/user/restuarant/${id}`,data,{
            withCredentials:true
        });
        return( response.data)
    } catch (error) {
        throw error.response.data;
    }
}

export const getOneRest=async(id)=>{
    //id is the id of the restuarant
    try {
        const response=await axios.get(`https://eatsbackend.onrender.com/api/restuarant/${id}`);
        return( response.data)
    } catch (error) {
        return error;
    }
}

export const deleteRest=async(id)=>{
     //id is the id of the restuarant
    try {
         const response=await axios.delete(`https://eatsbackend.onrender.com/api/restuarant/${id}`,{
            withCredentials:true
         }); 
         return response
       
    } catch (error) {
        throw error.response.data;
    }
}

