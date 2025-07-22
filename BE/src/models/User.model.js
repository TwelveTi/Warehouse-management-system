module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.ENUM("admin", "staff"),
      defaultValue: "staff"
    },
    refreshToken: {
      type: DataTypes.TEXT, // hoặc STRING dài
      allowNull: true
    }
  });

  return User;
};
