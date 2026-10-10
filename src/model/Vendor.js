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
    
    category:{
        type:String,
        
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
    },
    acceptTerms:{
        type:Boolean,
        default:false
    },
    termsAccepted: {
        type: Boolean,
        default: false,
      },


     
})


const vendor = mongoose.model('Vendor', vendorSchema,'vendor');
export default vendor