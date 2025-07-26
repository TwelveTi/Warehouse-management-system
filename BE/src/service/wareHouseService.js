const db = require('../models');

class WarehouseService {
    async getAllWarehouse() {
        const warehouses = await db.Warehouse.findAll({
            attributes: ['name', 'location', 'description']  // Chỉ lấy các trường này
        });
        return warehouses;
    }

    async getWarehouseByID(id) {
        const warehouse = await db.Warehouse.findOne({ where: { id } });
        if (!warehouse) throw new Error('Warehouse does not exist');

        return warehouse;
    }

    async createWarehouse(name, location, description) {
        const existingWarehouse = await db.Warehouse.findOne({ where: { name } });
        if (existingWarehouse) throw new Error('Warehouse already exists');

        const newWarehouse = await db.Warehouse.create({
            name,
            location,
            description
        });

        const safeWarehouse = {
            name: newWarehouse.name,
            location: newWarehouse.location,
            description: newWarehouse.description
        };

        return safeWarehouse;
    }

    async updateWarehouse(id, name, location, description) {
        const warehouse = await this.getWarehouseByID(id);

        if (name) warehouse.name = name;
        if (location) warehouse.location = location;
        if (description) warehouse.description = description;

        await warehouse.save();

        const safeWarehouse = {
            name: warehouse.name,
            location: warehouse.location,
            description: warehouse.description
        };

        return safeWarehouse;
    }

    async deleteWarehouse(id) {
        const warehouse = await this.getWarehouseByID(id);
        await warehouse.destroy();
    }
}

module.exports = new WarehouseService();
