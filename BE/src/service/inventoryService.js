const db = require('../models');

class InventoryService {
    async getAllInventory() {
        const inventories = await db.Inventory.findAll({
            include: [
                { model: db.Product, attributes: ['name', 'sku'] },
                { model: db.Warehouse, attributes: ['name', 'location'] }
            ]
        });
        return inventories;
    }

    async getInventoryByID(id) {
        const inventory = await db.Inventory.findOne({
            where: { id },
            include: [
                { model: db.Product, attributes: ['name', 'sku'] },
                { model: db.Warehouse, attributes: ['name', 'location'] }
            ]
        });

        if (!inventory) throw new Error('Inventory does not exist');
        return inventory;
    }

    async createInventory(quantity, productId, warehouseId) {
        // Kiểm tra Product và Warehouse có tồn tại không
        const product = await db.Product.findByPk(productId);
        if (!product) throw new Error('Product does not exist');

        const warehouse = await db.Warehouse.findByPk(warehouseId);
        if (!warehouse) throw new Error('Warehouse does not exist');

        // Kiểm tra xem inventory đã tồn tại chưa
        const existingInventory = await db.Inventory.findOne({
            where: { productId, warehouseId }
        });
        if (existingInventory) throw new Error('Inventory already exists for this Product and Warehouse');

        // Tạo inventory
        const newInventory = await db.Inventory.create({
            quantity,
            productId,
            warehouseId
        });

        return newInventory;
    }

    async updateInventory(id, quantity) {
        const inventory = await this.getInventoryByID(id);
        if (quantity !== undefined) inventory.quantity = quantity;

        await inventory.save();
        return inventory;
    }

    async deleteInventory(id) {
        const inventory = await this.getInventoryByID(id);
        await inventory.destroy();
    }
}

module.exports = new InventoryService();
