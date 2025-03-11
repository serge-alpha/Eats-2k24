import axios from "axios"

// const address="http://localhost:3001/api/restuarant/";
const address= 'https://eatsbackend.onrender.com/api/restuarant/';

export const createRest=async(data)=>{
    try {
        const response=await axios.post(address,data,{
            withCredentials:true
        } );
        return( response.data)
    } catch (error) {
       return  error.response.data;
    }
}

export const getAllRest=async()=>{
    try {
        const response=await axios.get(address);
        return(response.data)
    } catch (error) {
        throw error.response.data;
    }
}

export const UpdateRest=async(data,id)=>{
    try {
        const response=await axios.put(address+`${id}`,data,{
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
        const response=await axios.get(address+`${id}`);
        return( response.data)
    } catch (error) {
        return error;
    }
}

export const deleteRest=async(id)=>{
     //id is the id of the restuarant
    try {
         const response=await axios.delete(address+`${id}`,{
            withCredentials:true
         }); 
         return response
       
    } catch (error) {
        throw error.response.data;
    }
}

