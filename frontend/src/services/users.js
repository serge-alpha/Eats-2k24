import axios from "axios"

const address="http://localhost:3001/api/user/";
// const address='https://eatsbackend.onrender.com/api/user/';
export const createUser=async(data)=>{
    try {
        const response=await axios.post(address,data);
        return(response)
    } catch (error) {
        throw error.response.data;
    }
}

export const verifyUser=async(token)=>{
    try {
        // console.log(token)
        const response=await axios.post(address+'verify',{token:token},{
            withCredentials:true
        });
        return( response)
    } catch (error) {
        throw error.response.data;
    }
}

export const LoginUser=async(data)=>{
    try {
        const response=await axios.post(address+'login',data,{
            withCredentials:true
        });
        return(response.data)
    } catch (error) {
        throw error.response.data;
    }
}
export const LogOutUser=async()=>{
    try {
        const response=await axios.get(address+'logout',{
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
        const response=await axios.put(address+`${id}`,data,{
            withCredentials:true
        });
        return(response.data)
    } catch (error) {
        throw error.response.data;
    }
}

export const getAllUser=async()=>{
    try {
        const response=await axios.get(address);
        return(response.data)
    } catch (error) {
        throw error.response.data;
    }
}
export const getsingleUser=async(id)=>{
    //id is the id of the user
    try {
        const response=await axios.get(address+`${id}`);
        return( response.data)
    } catch (error) {
        return error;
    }
}

export const deleteUser=async(id)=>{
     //id is the id of the user
    try {
         const response=await axios.delete(address+`${id}`,{
            withCredentials:true
         }); 
         return response
       
    } catch (error) {
        throw error.response.data;
    }
}

