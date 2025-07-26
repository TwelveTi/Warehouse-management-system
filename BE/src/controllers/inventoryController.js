const InventoryService = require('../service/inventoryService');
const ApiResponse = require('../utils/ApiResponse');

class InventoryController {
    async getAllInventory(req, res) {
        try {
            const result = await InventoryService.getAllInventory();
            return ApiResponse.success(res, 'Get All Inventory Successful', result);
        } catch (error) {
            return ApiResponse.error(res, error.message, 401);
        }
    }

    async getInventoryByID(req, res) {
        try {
            const { id } = req.params;
            const result = await InventoryService.getInventoryByID(id);
            return ApiResponse.success(res, 'Get Inventory By ID Successful', result);
        } catch (error) {
            return ApiResponse.error(res, error.message, 401);
        }
    }

    async createInventory(req, res) {
        try {
            const { quantity, productId, warehouseId } = req.body;
            const result = await InventoryService.createInventory(quantity, productId, warehouseId);
            return ApiResponse.success(res, 'Create Inventory Successful', result);
        } catch (error) {
            return ApiResponse.error(res, error.message, 401);
        }
    }

    async updateInventory(req, res) {
        try {
            const { id } = req.params;
            const { quantity } = req.body;
            const result = await InventoryService.updateInventory(id, quantity);
            return ApiResponse.success(res, 'Update Inventory Successful', result);
        } catch (error) {
            return ApiResponse.error(res, error.message, 401);
        }
    }

    async deleteInventory(req, res) {
        try {
            const { id } = req.params;
            await InventoryService.deleteInventory(id);
            return ApiResponse.success(res, 'Delete Inventory Successful', {});
        } catch (error) {
            return ApiResponse.error(res, error.message, 401);
        }
    }
}

module.exports = new InventoryController();
