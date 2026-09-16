import mongoose from "mongoose";






const vendorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    storeName:{
        type: String,
        required: true
    },
    storeUrl:{
        type:String
    },
    type:{
        type:String,
        required:true
    },
    primary_category:{
        type:String,
        required:true
    },
    buisness_address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true

    },
    zip:{
        type:String,
       
    },
    country:{
        type:String,
        required:true
    },
    storeDescription:{
        type:String,
        required:true,
        minlength:80,
        maxlength:320
    },
    website:{
        type:String
    },
    instagram:{
        type:String
    },
    processingTime:{
        type:String,
        required:true
    },
    returnPolicy:{
        type:String,
        required:true
    }


     
})


const vendor = mongoose.model('Vendor', vendorSchema,'vendor');
export default vendor