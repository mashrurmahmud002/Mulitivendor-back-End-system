
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

export const searchProducts = async(title)=>{
    const query = {}
    const products = await productUploadRepo.searchProducts(title,query);

    return products;
}

export const getProductsByQuery = async(category)=>{

    const products = await productUploadRepo.getProductsByQuery(category);
    return products;
    
}


export default {
    uploadProduct,
    getProducts,
    getProductsByVendorId,
    searchProducts,
    getProductsByQuery
}