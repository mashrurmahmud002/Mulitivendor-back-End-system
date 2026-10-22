import productUploadService from "../service/ProductUploadService.js";


export const uploadProduct = async(req,res)=>{


    console.log("hello", req.body);

    const product = await productUploadService.uploadProduct(req.body);
    res.status(200).json({
        message:"Product uploaded successfully",
        product
    });
}


export const getProducts = async(req,res)=>{
    const products = await productUploadService.getProducts(req.body);
    res.status(200).json({
        message:"Products fetched successfully",
        products
    });
}


export const searchProducts = async(req,res)=>{

    const {title}= req.query;
    console.log(title);
    const products = await productUploadService.searchProducts(title);
    res.status(200).json({
        message:"Products fetched successfully",
        products
    });
}


export const getProductsByVendorId = async(req,res)=>{
    const products = await productUploadService.getProductsByVendorId(req.params.id);
    res.status(200).json({
        message:"Products fetched successfully",
        products
    });
}


export const getProductsByQuery = async(req,res)=>{
    const {category} = req.query;
    

    const products = await productUploadService.getProductsByQuery(category);
    if(!products){
        return res.status(400).json({message:"Products not found"});
    }
    res.status(200).json({
        message:"Products fetched successfully",
        products
    });
    
}















export default {
    uploadProduct,
    getProducts,
    getProductsByVendorId,
    searchProducts,
    getProductsByQuery
}
