const db = require('../models');

class TransactionService {
    async getAllTransaction() {
        const transactions = await db.Transaction.findAll({
            include: [
                { model: db.Product, attributes: ['name', 'sku'] },
                { model: db.Warehouse, attributes: ['name', 'location'] }
            ]
        });
        return transactions;
    }

    async getTransactionByID(id) {
        const transaction = await db.Transaction.findOne({
            where: { id },
            include: [
                { model: db.Product, attributes: ['name', 'sku'] },
                { model: db.Warehouse, attributes: ['name', 'location'] }
            ]
        });

        if (!transaction) throw new Error('Transaction does not exist');
        return transaction;
    }

    async createTransaction(type, quantity, note, productId, warehouseId) {
        // Kiểm tra Product và Warehouse có tồn tại không
        const product = await db.Product.findByPk(productId);
        if (!product) throw new Error('Product does not exist');

        const warehouse = await db.Warehouse.findByPk(warehouseId);
        if (!warehouse) throw new Error('Warehouse does not exist');

        // Tạo transaction
        const newTransaction = await db.Transaction.create({
            type,
            quantity,
            note,
            productId,
            warehouseId
        });

        return newTransaction;
    }

    async updateTransaction(id, type, quantity, note) {
        const transaction = await this.getTransactionByID(id);

        if (type) transaction.type = type;
        if (quantity) transaction.quantity = quantity;
        if (note) transaction.note = note;

        await transaction.save();
        return transaction;
    }

    async deleteTransaction(id) {
        const transaction = await this.getTransactionByID(id);
        await transaction.destroy();
    }
}

module.exports = new TransactionService();
