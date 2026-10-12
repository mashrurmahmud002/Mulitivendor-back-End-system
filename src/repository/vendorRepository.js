import vendor from "../model/Vendor.js";


export const createVendor = async(vendor_data)=>{
    const vendor_add = await vendor.create(vendor_data);
    return vendor_add;
}


export const loginVendor = async(data)=>{
    const vendor_add = await vendor.findOne(data);
    return vendor_add;
}

export const getTopVendor = async(data)=>{
    const vendors = await vendor.find(data).sort({rating:-1}).limit(4);
    return vendors;
}




export default {
    createVendor,
    loginVendor,
    getTopVendor
}