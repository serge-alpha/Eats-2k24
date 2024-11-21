import axios from "axios"

//http://localhost:3001
export const createUser=async(data)=>{
    try {
        const response=await axios.post('https://eatsbackend.onrender.com/api/user/',data);
        return(response)
    } catch (error) {
        throw error.response.data;
    }
}

export const verifyUser=async(token)=>{
    try {
        // console.log(token)
        const response=await axios.post('https://eatsbackend.onrender.com/api/user/verify',{token:token},{
            withCredentials:true
        });
        return( response)
    } catch (error) {
        throw error.response.data;
    }
}

export const LoginUser=async(data)=>{
    try {
        const response=await axios.post('https://eatsbackend.onrender.com/api/user/login',data,{
            withCredentials:true
        });
        return(response.data)
    } catch (error) {
        throw error.response.data;
    }
}
export const LogOutUser=async()=>{
    try {
        const response=await axios.post('https://eatsbackend.onrender.com/api/user/logout',{
            withCredentials:true
        });
        return(response.data)
    } catch (error) {
        throw error.response.data;
    }
}

export const UpdateUser=async(data,id)=>{
    //data contains the infomation to be updated, id is the id of the user
    try {
        const response=await axios.put(`https://eatsbackend.onrender.com/api/user/${id}`,data,{
            withCredentials:true
        });
        return(response.data)
    } catch (error) {
        throw error.response.data;
    }
}

export const getAllUser=async()=>{
    try {
        const response=await axios.get(`https://eatsbackend.onrender.com/api/user`);
        return(response.data)
    } catch (error) {
        throw error.response.data;
    }
}
export const getsingleUser=async(id)=>{
    //id is the id of the user
    try {
        const response=await axios.get(`https://eatsbackend.onrender.com/api/user/${id}`);
        return( response.data)
    } catch (error) {
        return error;
    }
}

export const deleteUser=async(id)=>{
     //id is the id of the user
    try {
         const response=await axios.delete(`https://eatsbackend.onrender.com/api/user/${id}`,{
            withCredentials:true
         }); 
         return response
       
    } catch (error) {
        throw error.response.data;
    }
}

