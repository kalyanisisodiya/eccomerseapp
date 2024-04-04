import mongoose from "mongoose";


const cartSchema = mongoose.Schema({
    product_id:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
   
});

export default mongoose.model("cart",cartSchema);
