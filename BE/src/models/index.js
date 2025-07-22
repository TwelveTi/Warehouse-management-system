// models/index.js
const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import các model sau này ở đây (User, Product,...)
// Import models
db.User = require("./User.model")(sequelize, Sequelize.DataTypes);
db.Product = require("./Product.model")(sequelize, Sequelize.DataTypes);
db.Warehouse = require("./Warehouse.model")(sequelize, Sequelize.DataTypes);
db.Inventory = require("./Inventory.model")(sequelize, Sequelize.DataTypes);
db.Transaction = require("./Transaction.model")(sequelize, Sequelize.DataTypes);

// Setup associations
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;
