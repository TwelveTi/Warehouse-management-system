const express = require("express");
const route = express.Router();
const productController = require('../controllers/productController')
const AuthMiddleware = require('../middlewares/AuthMiddleware');
const RoleMiddleware = require('../middlewares/RoleMiddleware');

// áp dụng xác thực cho toàn bộ route.
route.use(AuthMiddleware.verifyToken); 

// API
route.get("/",productController.getAllProduct); //Get All Product
route.post("/",productController.createProduct); //Create Product
route.get("/:id",productController.getProductByID); //Get Product by id

// áp dụng phân quyền 
route.use(RoleMiddleware.checkRole("admin"));
//API
route.delete("/:id",productController.deleteProduct);
route.put("/:id",productController.updateProduct);

module.exports = route 