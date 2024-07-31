import axios from "axios"

export const createRest=async(data)=>{
    try {
        const response=await axios.post('http://localhost:3001/api/restuarant',data,{
            withCredentials:true
        } );
        return( response.data)
    } catch (error) {
       return  error.response.data;
    }
}

export const getAllRest=async()=>{
    try {
        const response=await axios.get(`http://localhost:3001/api/restuarant`);
        return(response.data)
    } catch (error) {
        throw error.response.data;
    }
}

export const UpdateRest=async(data,id)=>{
    try {
        const response=await axios.put(`http://localhost:3001/api/user/restuarant/${id}`,data,{
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
        const response=await axios.get(`https://localhost:3001/api/restuarant/${id}`);
        return( response.data)
    } catch (error) {
        return error;
    }
}

export const deleteRest=async(id)=>{
     //id is the id of the restuarant
    try {
         const response=await axios.delete(`https://localhost:3001/api/restuarant/${id}`,{
            withCredentials:true
         }); 
         return response
       
    } catch (error) {
        throw error.response.data;
    }
}

