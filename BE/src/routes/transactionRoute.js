const express = require('express');
const route = express.Router();
const TransactionController = require('../controllers/transactionController');
const AuthMiddleware = require('../middlewares/AuthMiddleware');
const RoleMiddleware = require('../middlewares/RoleMiddleware');

// Áp dụng xác thực token cho toàn bộ route
route.use(AuthMiddleware.verifyToken);
// Áp dụng phân quyền admin cho update & delete
route.use(RoleMiddleware.checkRole("admin"));

// API
route.get("/", TransactionController.getAllTransaction);           // Get All Transactions
route.post("/", TransactionController.createTransaction);          // Create Transaction
route.get("/:id", TransactionController.getTransactionByID);       // Get Transaction by ID
route.put("/:id", TransactionController.updateTransaction);        // Update Transaction
route.delete("/:id", TransactionController.deleteTransaction);  


module.exports = route;
