const TransactionService = require('../service/transactionService');
const ApiResponse = require('../utils/ApiResponse');

class TransactionController {
    async getAllTransaction(req, res) {
        try {
            const result = await TransactionService.getAllTransaction();
            return ApiResponse.success(res, 'Get All Transactions Successful', result);
        } catch (error) {
            return ApiResponse.error(res, error.message, 401);
        }
    }

    async getTransactionByID(req, res) {
        try {
            const { id } = req.params;
            const result = await TransactionService.getTransactionByID(id);
            return ApiResponse.success(res, 'Get Transaction By ID Successful', result);
        } catch (error) {
            return ApiResponse.error(res, error.message, 401);
        }
    }

    async createTransaction(req, res) {
        try {
            const { type, quantity, note, productId, warehouseId } = req.body;
            const result = await TransactionService.createTransaction(type, quantity, note, productId, warehouseId);
            return ApiResponse.success(res, 'Create Transaction Successful', result);
        } catch (error) {
            return ApiResponse.error(res, error.message, 401);
        }
    }

    async updateTransaction(req, res) {
        try {
            const { id } = req.params;
            const { type, quantity, note } = req.body;
            const result = await TransactionService.updateTransaction(id, type, quantity, note);
            return ApiResponse.success(res, 'Update Transaction Successful', result);
        } catch (error) {
            return ApiResponse.error(res, error.message, 401);
        }
    }

    async deleteTransaction(req, res) {
        try {
            const { id } = req.params;
            await TransactionService.deleteTransaction(id);
            return ApiResponse.success(res, 'Delete Transaction Successful', {});
        } catch (error) {
            return ApiResponse.error(res, error.message, 401);
        }
    }
}

module.exports = new TransactionController();
