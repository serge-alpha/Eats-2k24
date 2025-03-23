import axios from "axios"


// const address="http://localhost:3001/api/meal/";
const address='https://eatsbackend.onrender.com/api/meal/';
export const createMeal=async(data)=>{
    try {
        const response=await axios.post(address,data,{
            withCredentials:true
        } );
        console.log(response);
    } catch (error) {
        throw error.response.data;
    }
}

export const getAllMeals=async()=>{
    try {
        const response=await axios.get(address);
        return(response.data)
    } catch (error) {
        throw error.response.data;
    }
}

export const UpdateMeal=async(data,id)=>{
    try {
        const response=await axios.put(address+`${id}`,data,{
            withCredentials:true
        });
        return( response.data)
    } catch (error) {
        throw error.response.data;
    }
}

export const getOneMeal=async(slug)=>{
    //id is the id of the user
    try {
        const response=await axios.get(address+`${slug}`);
        return( response.data)
    } catch (error) {
        return error;
    }
}

export const deleteMeal=async(slug)=>{
     //id is the id of the user
    try {
         const response=await axios.delete(address+`${slug}`,{
            withCredentials:true
         }); 
         return response
       
    } catch (error) {
        throw error.response.data;
    }
}