

import { createToken } from "../middleWare/verifytoken.js";
import auth from "../model/AuthModel.js";
import vendorService from "../service/vendorService.js"

 export const createVendor = async(req,res)=>{
    const vendor_data = req.body;
    const vendor_add = await vendorService.createVendor(vendor_data);
    const token = createToken({email:vendor_data.email,password:vendor_data.password});
    if(vendor_add){
        const email_exist = await auth.findOne({email:vendor_data.email});

        if(email_exist){
            return res.status(200).json({
            message:"Vendor created successfully",
            vendor_add
            });  

      
       
            







            


      



        }
      res.cookie('rafi_token', token, { httpOnly: true, secure: false, sameSite: 'lax' });  

      return res.status(200).json({message:"Vendor created successfully", success:false, data:{vendor_add,token}});
         
    }else{

        return res.status(400).json({
            message:"Vendor not created"
        });
        
    }
    
 }


 export const loginVendor = async(req,res)=>{
    const vendor_data = req.body;
    console.log(vendor_data);
    
    const vendor_add = await vendorService.loginVendor(vendor_data);
    console.log(vendor_add, "vendor_add");
  
    if(vendor_add){
         const email_exist = await auth.findOne({email:vendor_data.email});
         if(email_exist){
             return res.status(200).json({
             message:"Vendor logged in successfully",
             vendor_add
             })
         }

        const token = createToken({email:vendor_data.email,password:vendor_data.password});
        res.cookie('rafi_token', token, { httpOnly: true, secure: false, sameSite: 'lax' });  
        return res.status(200).json({message:"Vendor logged in successfully", success:false, data:{vendor_add,token}});

        

       }else{

        return res.status(400).json({
            message:"Vendor not logged in"
        });
        
    }
 }

 export const getTopVendor = async(req,res)=>{
    const vendors = await vendorService.getTopVendor(req.body);
    if(!vendors){
        return res.status(400).json({
            message:"Vendors not found"
        });
    }
    res.status(200).json({
        message:"Vendors fetched successfully",
        vendors
    });

 }





 


 export default {
    createVendor,
    loginVendor,
    getTopVendor
 }