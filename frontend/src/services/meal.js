import axios from "axios"

export const createMeal=async(data)=>{
    try {
        const response=await axios.post('http://localhost:3001/api/meal',data,{
            withCredentials:true
        } );
        console.log(response);
        // return( response)
    } catch (error) {
        console.log(error);
    //    return  error.response.data;
    }
}

export const getAllMeals=async()=>{
    try {
        const response=await axios.get(`http://localhost:3001/api/meal`);
        return(response.data)
    } catch (error) {
        throw error.response.data;
    }
}

export const UpdateMeal=async(data,slug)=>{
    try {
        const response=await axios.put(`http://localhost:3001/api/meal/${slug}`,data,{
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
        const response=await axios.get(`https://localhost:3001/api/meal/${slug}`);
        return( response.data)
    } catch (error) {
        return error;
    }
}

export const deleteMeal=async(slug)=>{
     //id is the id of the user
    try {
         const response=await axios.delete(`https://localhost:3001/api/meal/${slug}`,{
            withCredentials:true
         }); 
         return response
       
    } catch (error) {
        throw error.response.data;
    }
}