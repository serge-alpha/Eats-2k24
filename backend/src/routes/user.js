const { getAllUsers, getOneUser, updateUser, deleteUser, createUser, forgetPassword, restPassword, verifyUser, loginUser, banUser, kycVerification, logoutUser } = require('../controller/user');
const { isAmin, isLogOut, isLogin } = require('../middleware/auth');
const { uploadUser } = require('../middleware/userfile');

const userRouter =require('express').Router();


userRouter.get('/',isAmin, getAllUsers);
userRouter.get('/logout',logoutUser);
userRouter.get('/:id',isLogin,getOneUser);
userRouter.post('/',createUser);
userRouter.post('/kyc/:id', uploadUser.single('image') ,isLogin, kycVerification);
userRouter.post('/verify', uploadUser.single('image') , verifyUser);
userRouter.post('/forgot-password' , forgetPassword);
userRouter.post('/update-password' , restPassword);
userRouter.put('/:id', uploadUser.single("image") , updateUser);
userRouter.delete('/:id',isAmin,deleteUser);
userRouter.put('/ban/:id',isAmin,banUser);
userRouter.post('/login',isLogOut,loginUser);



module.exports = userRouter
