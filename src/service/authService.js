import auth from "../model/AuthModel.js";

import authRepo from "../repository/authRepository.js";


export const createUser = async(user_data)=>{
    const user_add = await authRepo.createUser(user_data);
    return user_add;
}


export const findIdbyEmail = async(email)=>{
    const user = await auth.findOne({email:email});
    return user;
}

export const loginUser = async(email,password)=>{
    const user = await authRepo.loginUser({email:email,password:password});
    return user;
}



export default {createUser, findIdbyEmail, loginUser}