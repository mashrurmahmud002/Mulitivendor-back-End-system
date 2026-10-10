import vendorRepo from "../repository/vendorRepository.js";

export const createVendor = async(vendor_data)=>{
    const vendor_add = await vendorRepo.createVendor(vendor_data);
    return vendor_add;
}





export default {
    createVendor
}