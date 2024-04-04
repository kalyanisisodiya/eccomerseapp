import Cart from "../models/cartModel.js";

export const add_to_cart = async(req,res)=>{

    try {
       
        const cart_obj = new Cart({
            product_id:req.body.product_id,
            price: req.body.price,
        });
        const cartData = await cart_obj.save();

        res.status(200).send({ success:true, msg:"Cart Product detail",data:cartData})
    } catch (error) {
        res.status(400).send({ success:false,msg:error.message });
    }
}
