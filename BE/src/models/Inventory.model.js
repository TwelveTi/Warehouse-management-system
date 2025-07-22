// models/Inventory.model.js
module.exports = (sequelize, DataTypes) => {
  const Inventory = sequelize.define("Inventory", {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  });

  Inventory.associate = (models) => {
    Inventory.belongsTo(models.Product, {
      foreignKey: {
        name: 'productId',
        allowNull: false
      },
      onDelete: 'CASCADE'
    });

    Inventory.belongsTo(models.Warehouse, {
      foreignKey: {
        name: 'warehouseId',
        allowNull: false
      },
      onDelete: 'CASCADE'
    });
  };

  return Inventory;
};
