import express from 'express';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
import { 
    addToWishlist,
     createProductController, 
     deleteProductController,
     getProductController,
     getSingleProductController, 
     productCategoryController, 
     productCountController, 
     productFilterController, 
     productListController, 
     productPhotoController,
     relatedProductController,
     searchProductController,
     updateProductController,
     } from '../controllers/productController.js';

import formidable from 'express-formidable';
import { get } from 'mongoose';


const router = express.Router();

//routes
router.post('/create-product',
requireSignIn,
isAdmin,
formidable(),
createProductController
);
// router.post(
//     '/create-product', 
// requireSignIn,
// isAdmin,
// formidable(),
// createProductController
//  );

 //routes
router.put(
    "/update-product/:pid", 
requireSignIn,
isAdmin,
formidable(),
 updateProductController
 );

 //get products
 router.get('/get-product', getProductController);

 //single product
 router.get("/get-product/:slug", getSingleProductController);

 //get photo
 router.get('/product-photo/:pid', productPhotoController);

 //delete product
 router.delete('/product/:pid', deleteProductController);

 //filter product
 router.get('/product-filters', productFilterController);

 //product count
 router.get('/product-count', productCountController);

 //product per page
 router.get('/product-list/:page', productListController);

 //search product
 router.get('/search/:keyword', searchProductController);

 //similar product
 router.get('/related-product/:pid/:cid', relatedProductController);

 //category wise product
 router.get('/product-category/:slug', productCategoryController);

 // add to wishlist 
 router.put("/wishlist/", addToWishlist);

export default router;