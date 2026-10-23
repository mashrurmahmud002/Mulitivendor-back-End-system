import vendorRepo from "../repository/vendorRepository.js";

export const createVendor = async(vendor_data)=>{
    const vendor_add = await vendorRepo.createVendor(vendor_data);
    return vendor_add;
}

export const loginVendor = async(data)=>{
    console.log(data,"data from vendor login service");
    const vendor_add = await vendorRepo.loginVendor(data);
    return vendor_add;

}

export const getTopVendor = async(data)=>{
    const vendors = await vendorRepo.getTopVendor(data);
    return vendors;
}



export default {
    createVendor,
    loginVendor,
    getTopVendor
}