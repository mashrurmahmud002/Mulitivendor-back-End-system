import productUpload from "../model/ProductUploadModel.js";
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
    console.log(category, "category");
    

    const products = await productUploadService.getProductsByQuery(category);
    if(!products){
        return res.status(400).json({message:"Products not found"});
    }

    if(products.length === 0){
        return res.status(400).json({message:"Products not found"})
    }
   
    console.log("hello baccho")
    res.status(200).json({
        message:"Products fetched successfully",
        products
    });
    
}

export const getALLproductsByQuery = async(req,res)=>{
    const {category} = req.query;
    console.log(category, "category is from getALLproductsByQuery ");
    if(category){
        const products = await productUploadService.getALLproductsByQuery(category);
        return res.status(200).json({message:"Products fetched successfully", products});
    }
    res.status(400).json({message:"Products not found"});
}

export const getProductsByPagnation = async(req,res)=>{
    const page = Number(req.query.page);
    console.log("page count", page);
    
    
    const limit = 10;
    const skip = (page - 1) * limit;
    const products = await productUploadService.getProductsByPagnation(skip, limit);

    const totalProducts = await productUpload.countDocuments();
    console.log(totalProducts, "total products");
    const totalPages = Math.ceil(totalProducts / limit);
    console.log(totalPages, "the main amount pages");
    res.status(200).json({message:"Products fetched successfully", products, totalPages});
    
}















export default {
    uploadProduct,
    getProducts,
    getProductsByVendorId,
    searchProducts,
    getProductsByQuery,
    getALLproductsByQuery,
    getProductsByPagnation
}
