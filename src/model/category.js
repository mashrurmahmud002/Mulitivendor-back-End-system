import mongoose  from "mongoose";



const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    status:{
        type: Boolean,
        default: true
    }
})


const category = mongoose.model('Category', categorySchema,'category')
export default category;