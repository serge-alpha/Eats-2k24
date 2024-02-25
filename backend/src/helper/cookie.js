const jwt = require("jsonwebtoken");
const dev = require("../config");
const getId = (req)=>{
    let id="";
    const accessToken=req.headers.cookie.split('=')[1];

    jwt.verify(accessToken,String(dev.app.authkey),
        async(err,data)=>{
            if(err){
                return res.status(404).json({message:'Invalid Token'})
            }   
            id = data.id;     
        })
        return id;
}

module.exports = {getId}