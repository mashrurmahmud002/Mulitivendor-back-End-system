import mongoose from "mongoose";
import crypto from 'crypto';




const variantSchema = new mongoose.Schema({
  optionName: {
    type: String,
    required: [true, "Option name is required"],
    trim: true,
  },

   valuess : {
    type: String,
    required: [true, "Values are required"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
    default: 0,
  },
  stock: {
    type: Number,
    required: [true, "Stock is required"],
    default: 0,
  },
  color: {
    type: String,
    default: "", // Changed from required: true unless your form strictly sends color
  },
  images: [
    {
      type: String,
    },
  ],
});



const productSchema = new mongoose.Schema(
  {
   
    quantity:{

        type: Number,
        required: true,
    },
    lowstock:{

        type: Number,
        required: true,
    },
    allowBackdors:{
        type: Boolean,
        default: false
    },
    trackInventory:{
        type: Boolean,
        default: false
    },
    tax:{
       type:Boolean,
       default: false
    },
    brand:{
        type: String,
        required: true,
    },
    title:{
        type: String,
        required: true,
    },
    subcategory:{
        type: String,
        required: true,
    },
    imageArray:{
        type: [String],
        required: true,
    },

    category:{
        type: String,
        required: true,
    },
    description: {
      type: String,
      required: true,
    },
    shortDescription:{
        type: String,
        required: true,
    },
    cost:{
      type:String,
      required: true
    },
    generateSKu: {
      type: String,
      required: true,
    },
    varient: {
      type: [variantSchema],
      required: true,
    },
    price:{
        type: Number,
        required: true
    },
    comparePrice:{
        type: Number,
        required: true
    },
    lowstock:{
        type: Number,
        required: true
    },
    weight:{
        type: Number,
        required: true
    },
    length:{
        type: Number,
        required: true
    },
    width:{
        type: Number,
        required: true
    },
    height:{
        type: Number,
        required: true
    },
    seoTitle:{
        type: String,
        
    },
    metaDescription:{
        type: String,
    },
    urlSlug:{
        type: String,
        required: true
    },
    tags:{
        type:[String],
        required: true
    },

   

    status: {
      type: String,
      enum: ["draft", "active", "inactive"],
      default: "draft",
    },
  },
  {
    timestamps: true,
    // 👇 এই অংশটুকু যোগ করতে হবে যেন JSON রেসপন্সে Virtuals পাস হয়
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);



productSchema.pre("save", async function(){
   if(this.isModified('urlSlug')){
       this.urlSlug = this.urlSlug.toLowerCase() + crypto.randomBytes(5).toString('hex');
   }
})


productSchema.virtual("isNewProduct").get(function(){
  if(!this.createdAt) return false;

  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  return new Date() - new Date(this.createdAt) <= THREE_DAYS_IN_MS;
})







const productUpload = mongoose.model("ProductUpload", productSchema,'productUpload');
export default productUpload