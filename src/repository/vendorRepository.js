import vendor from "../model/Vendor.js";


export const createVendor = async(vendor_data)=>{
    const vendor_add = await vendor.create(vendor_data);
    return vendor_add;
}




export default {
    createVendor
}