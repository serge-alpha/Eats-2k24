import React, { useState } from "react";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import {jwtDecode} from "jwt-decode";

const clientId= process.env.REACT_APP_GOOGLE_CLIENT_ID;
const Google=()=>{
    const [user,setUser]=useState({})
    const handleLogin=(response)=>{ 
        try { 
            setUser( jwtDecode(response.credential));
            return(user);
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <div>
            <GoogleOAuthProvider clientId={clientId}>
                <GoogleLogin
                    onSuccess={credentialResponse => {
                    handleLogin(credentialResponse);
                    }}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                />
            </GoogleOAuthProvider>
        </div>
    )
};

export default Google;