import category from "../model/category.js";

export const getCategories = async(req,res)=>{
    const categories = await category.find();
    res.status(200).json({
        status:"success",
        categories
    });

}





export default {
    getCategories
}