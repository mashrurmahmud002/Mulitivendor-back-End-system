
import productUpload from "../model/ProductUploadModel.js";


export const uploadProduct = async(product_data)=>{
    const product_add = await productUpload.create(product_data);
    return product_add;
}

export const getProducts = async(product_data)=>{
    const products = await productUpload.find(product_data);
    return products;
}

export const getProductsByVendorId = async(vendor_id)=>{
    const products = await productUpload.findOne({_id:vendor_id});
    return products;
}


export default {
    uploadProduct,
    getProducts,
    getProductsByVendorId
}