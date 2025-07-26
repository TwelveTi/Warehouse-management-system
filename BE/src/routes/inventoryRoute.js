const express = require('express');
const route = express.Router();

const InventoryController = require('../controllers/inventoryController');
const AuthMiddleware = require('../middlewares/AuthMiddleware');
const RoleMiddleware = require('../middlewares/RoleMiddleware');

// Áp dụng xác thực token cho toàn bộ route
route.use(AuthMiddleware.verifyToken);
// Áp dụng phân quyền admin
route.use(RoleMiddleware.checkRole("admin"));

//API 
route.get("/", InventoryController.getAllInventory);           // Get All Inventories
route.post("/", InventoryController.createInventory);          // Create Inventory
route.get("/:id", InventoryController.getInventoryByID);       // Get Inventory by ID
route.put("/:id", InventoryController.updateInventory);        // Update Inventory
route.delete("/:id", InventoryController.deleteInventory);     // Delete Inventory

module.exports = route;
