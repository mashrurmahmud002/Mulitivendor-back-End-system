import Subcategory from "../model/subcategory.js";


export const getSubCategories = async(req,res)=>{
    const subcategories = await Subcategory.find({});
    res.status(200).json({
        status:"success",
        subcategories
    });

}












export default {
    getSubCategories
}