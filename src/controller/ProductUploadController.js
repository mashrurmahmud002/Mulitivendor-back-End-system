import productUploadService from "../service/productUploadService.js";


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















export default {
    uploadProduct,
    getProducts
}