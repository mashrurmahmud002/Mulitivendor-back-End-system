
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
    const products = await productUpload.findOne({_id:vendor_id}).populate('vendor_id', "processingTime");
    return products;
}

export const searchProducts = async(title, query)=>{

    const products = await productUpload.find({
         title: { $regex: title, $options: 'i' },
    })

    return products;
    

}

export const getProductsByQuery = async(category)=>{
    const threeDaysAgo = new Date(
      Date.now() - 3 * 24 * 60 * 60 * 1000
    );

    if(category === "all"){
        const products = await productUpload.find({createdAt:{$gte:threeDaysAgo}, status:"active"});
        return products
    }
    if(category === "home"){
        const products = await productUpload.find({category:"Home", createdAt:{$gte:threeDaysAgo}, status:"active"});
        return products
    }
    if(category === "fashion"){
        const products = await productUpload.find({category:"Fashion", createdAt:{$gte:threeDaysAgo}, status:"active"});
        return products
    }
    if(category === "beauty"){
        const products = await productUpload.find({category:"Beauty", createdAt:{$gte:threeDaysAgo}, status:"active"});
        return products

    }
    if(category === "automative"){
        const products = await productUpload.find({category:"Automotive", createdAt:{$gte:threeDaysAgo}, status:"active"});
        return products
    }  
    
    if(category === "food"){
        const products = await productUpload.find({category:"Food", createdAt:{$gte:threeDaysAgo}, status:"active"});
        return products

    }
    if(category === "automative"){
        const products = await productUpload.find({category:"Automotive", createdAt:{$gte:threeDaysAgo}, status:"active"});
        return products
    }


}




export default {
    uploadProduct,
    getProducts,
    getProductsByVendorId,
    searchProducts,
    getProductsByQuery
    
}