

import vendorService from "../service/vendorService.js"

 export const createVendor = async(req,res)=>{
    const vendor_data = req.body;
    const vendor_add = await vendorService.createVendor(vendor_data);
    if(vendor_add){
        return res.status(200).json({
        message:"Vendor created successfully",
        vendor_add
    });   
    }else{

        return res.status(400).json({
            message:"Vendor not created"
        });
        
    }
    
 }


 


 export default {
    createVendor
 }