module.exports = (sequelize, DataTypes) => {
  const Warehouse = sequelize.define("Warehouse", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  });

  return Warehouse;
};
