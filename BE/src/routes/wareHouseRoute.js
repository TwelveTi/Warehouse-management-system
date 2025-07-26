const express = require("express");
const route = express.Router();
const WarehouseController = require('../controllers/wareHouseController')
const AuthMiddleware = require('../middlewares/AuthMiddleware');
const RoleMiddleware = require('../middlewares/RoleMiddleware');

// áp dụng xác thực cho toàn bộ route.
route.use(AuthMiddleware.verifyToken); 

// áp dụng phân quyền cho toàn bộ route
route.use(RoleMiddleware.checkRole("admin"));

// API Public (chỉ cần xác thực)
route.get("/", WarehouseController.getAllWarehouse);          // Get All Warehouse
route.post("/", WarehouseController.createWarehouse);         // Create Warehouse
route.get("/:id", WarehouseController.getWarehouseByID);  
route.delete("/:id", WarehouseController.deleteWarehouse);    // Delete Warehouse
route.put("/:id", WarehouseController.updateWarehouse);       // Update Warehouse

module.exports = route 