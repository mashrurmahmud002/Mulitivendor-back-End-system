import auth from "../model/AuthModel.js";

export const createUser = async(user_data)=>{
    const user = await auth.create(user_data);
    return user;
}

export const loginUser = async(user_data)=>{
    const user = await auth.findOne(user_data);
    return user;
}







export default {
    createUser,
    loginUser
}