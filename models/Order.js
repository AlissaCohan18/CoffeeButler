const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Order extends Model {}

// let's define our columns for the user orders!
Order.init(
  {
    // define id column in table
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // define menu column in table
    drink: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },

  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "order",
  }
);

module.exports = Order;
