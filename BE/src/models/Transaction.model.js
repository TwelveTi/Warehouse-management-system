// models/Transaction.model.js
module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define("Transaction", {
    type: {
      type: DataTypes.ENUM('IMPORT', 'EXPORT'),
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    note: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });

  Transaction.associate = (models) => {
    Transaction.belongsTo(models.Product, {
      foreignKey: {
        name: 'productId',
        allowNull: false
      },
      onDelete: 'CASCADE'
    });

    Transaction.belongsTo(models.Warehouse, {
      foreignKey: {
        name: 'warehouseId',
        allowNull: false
      },
      onDelete: 'CASCADE'
    });

    // Nếu bạn có bảng User sau này để ghi ai thao tác
    // Transaction.belongsTo(models.User, { foreignKey: 'userId' });
  };

  return Transaction;
};
