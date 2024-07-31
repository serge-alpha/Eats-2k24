import axios from "axios"


export const createUser=async(data)=>{
    try {
        const response=await axios.post('http://localhost:3001/api/user/',data);
        return(response)
    } catch (error) {
        throw error.response.data;
    }
}

export const verifyUser=async(token)=>{
    try {
        // console.log(token)
        const response=await axios.post('http://localhost:3001/api/user/verify',{token:token},{
            withCredentials:true
        });
        return( response)
    } catch (error) {
        throw error.response.data;
    }
}

export const LoginUser=async(data)=>{
    try {
        const response=await axios.post('http://localhost:3001/api/user/login',data,{
            withCredentials:true
        });
        return(response.data)
    } catch (error) {
        throw error.response.data;
    }
}
export const LogOutUser=async()=>{
    try {
        const response=await axios.post('http://localhost:3001/api/user/logout',{
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
        const response=await axios.put(`http://localhost:3001/api/user/${id}`,data,{
            withCredentials:true
        });
        return(response.data)
    } catch (error) {
        throw error.response.data;
    }
}

export const getAllUser=async()=>{
    try {
        const response=await axios.get(`http://localhost:3001/api/user`);
        return(response.data)
    } catch (error) {
        throw error.response.data;
    }
}
export const getsingleUser=async(id)=>{
    //id is the id of the user
    try {
        const response=await axios.get(`https://localhost:3001/api/user/${id}`);
        return( response.data)
    } catch (error) {
        return error;
    }
}

export const deleteUser=async(id)=>{
     //id is the id of the user
    try {
         const response=await axios.delete(`https://localhost:3001/api/user/${id}`,{
            withCredentials:true
         }); 
         return response
       
    } catch (error) {
        throw error.response.data;
    }
}

