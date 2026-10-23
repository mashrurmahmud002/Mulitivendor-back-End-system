
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
        console.log("Hello home")
        const products = await productUpload.find({category:"Home", createdAt:{$gte:threeDaysAgo}, status:"active"});
        return products
    }
    if(category === "fashion"){
        const products = await productUpload.find({category:"Fashion", createdAt:{$gte:threeDaysAgo}, status:"active"});
        return products
    }
    if(category === "beauty"){
        console.log("hello beauty")
        const products = await productUpload.find({category:"Beauty", createdAt:{$gte:threeDaysAgo}, status:"active"});
        console.log("The beauty info", products)
        return products

    }
    if(category === "automotive"){
        const products = await productUpload.find({category:"Automotive", createdAt:{$gte:threeDaysAgo}, status:"active"});
        console.log(products, "THis is form automative")
        return products
    }  
    
    if(category === "food"){
        
        const products = await productUpload.find({category:"Food", createdAt:{$gte:threeDaysAgo}, status:"active"});
        return products

    }
    if(category === "sports"){
        console.log(category === "sports");
        const products = await productUpload.find({category:"Sports", createdAt:{$gte:threeDaysAgo}, status:"active"});
        console.log(products);
        return products
    }
    if(category === "electronics"){
        console.log("hello electronics");
        const products = await productUpload.find({category:"Electronics", createdAt:{$gte:threeDaysAgo}, status:"active"});
        console.log(products);
        return products
    }
    if(category === "books"){
        const products = await productUpload.find({category:"Books", createdAt:{$gte:threeDaysAgo}, status:"active"});
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