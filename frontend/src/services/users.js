import axios from "axios"

export const createUser=async(data)=>{
    try {
        const response=await axios.post('http://localhost:3001/api/user/',data,{
            withCredentials:true
        });
        return( response)
    } catch (error) {
        throw new Error(
            `Error signin up:${error}`
        )
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
        console.log(error)
        throw new Error(
            `Error in verify:${error.message}`
        )
    }
}

export const LoginUser=async(data)=>{
    try {
        const response=await axios.post('http://localhost:3001/api/user/login',data,{
            withCredentials:true
        });
        return( response.data)
    } catch (error) {
        throw new Error(
            `Error Loginin: ${error}`
        )
    }
}

export const UpdateUser=async(data,id)=>{
    try {
        const response=await axios.put(`http://localhost:3001/api/user/update/${id}`,data,{
            withCredentials:true
        });
        return( response.data)
    } catch (error) {
        throw new Error(
            `Error Loginin: ${error}`
        )
    }
}

export const getAllUser=async()=>{
    try {
        const response=await axios.get(`http://localhost:3001/api/user`);
        return(response.data)
    } catch (error) {
        throw new Error(
            `Error fetching users: ${error}`
        )
    }
}
export const getsingleUser=async(data)=>{
    try {
        const response=await axios.get(`https://localhost:3001/api/user/${data}`);
        return( response)
    } catch (error) {
        throw new Error(
            `Error fetching user: ${error}`
        )
    }
}

export const deleteUser=async(id)=>{
    try {
         const response=await axios.delete(`https://localhost:3001/api/user/${id}`,{
            withCredentials:true
         }); 
         return response
       
    } catch (error) {
        throw new Error(
            `Error deleting User: ${error}`
        )
    }
}

