
import productUploadRepo from "../repository/ProductUploadRepository.js";

export const uploadProduct = async(product_data)=>{
    const product_add = await productUploadRepo.uploadProduct(product_data);
    return product_add;
}

export const getProducts = async(product_data)=>{
    const products = await productUploadRepo.getProducts(product_data);
    return products;
}

export const getProductsByVendorId = async(vendor_id)=>{
    const products = await productUploadRepo.getProductsByVendorId(vendor_id);
    return products;
}


export default {
    uploadProduct,
    getProducts,
    getProductsByVendorId
}