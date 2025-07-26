const WarehouseService = require('../service/wareHouseService');
const Apiresponse = require('../utils/ApiResponse');

class WarehouseController {
    async getAllWarehouse(req, res) {
        try {
            const result = await WarehouseService.getAllWarehouse();
            return Apiresponse.success(res, 'Get All Warehouses Successful', result);
        } catch (error) {
            return Apiresponse.error(res, error.message, 401);
        }
    }

    async getWarehouseByID(req, res) {
        try {
            const { id } = req.params;
            const result = await WarehouseService.getWarehouseByID(id);
            return Apiresponse.success(res, 'Get Warehouse By ID Successful', result);
        } catch (error) {
            return Apiresponse.error(res, error.message, 401);
        }
    }

    async createWarehouse(req, res) {
        try {
            const { name, location, description } = req.body;
            const result = await WarehouseService.createWarehouse(name, location, description);
            return Apiresponse.success(res, 'Create Warehouse Successful', result);
        } catch (error) {
            return Apiresponse.error(res, error.message, 401);
        }
    }

    async updateWarehouse(req, res) {
        try {
            const { id } = req.params;
            const { name, location, description } = req.body;
            const result = await WarehouseService.updateWarehouse(id, name, location, description);
            return Apiresponse.success(res, 'Update Warehouse Successful', result);
        } catch (error) {
            return Apiresponse.error(res, error.message, 401);
        }
    }

    async deleteWarehouse(req, res) {
        try {
            const { id } = req.params;
            await WarehouseService.deleteWarehouse(id);
            return Apiresponse.success(res, 'Delete Warehouse Successful', {});
        } catch (error) {
            return Apiresponse.error(res, error.message, 401);
        }
    }
}

module.exports = new WarehouseController();
