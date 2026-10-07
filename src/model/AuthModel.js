import mongoose from "mongoose";
import bcrypt from 'bcryptjs'



const authSchema = new mongoose.Schema({
    fullname:{
        type: String,
        required: true

    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});


authSchema.pre('save', async function() {
    if(this.isModified('password')){
         const salt = await bcrypt.genSalt(10);
         this.password = await bcrypt.hash(this.password, salt);
         
    }
    
  });


const auth = mongoose.model('Auth', authSchema,'auth')
export default auth
