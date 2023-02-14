// the Order model will hold the 
// drink order, add-ons for the order, and nickname of the order

const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Order extends Model{}

// let's define our columns for the user orders!
Order.init(
    {
        // define id column in table
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
    // define menu column in table
    drink: {
        type: DataTypes.TEXT,
        allowNull:false
    },

    // define add-ons column in table | this will be an additional drink or snack etc.
    pastry: {
        type: DataTypes.TEXT,
    },
    // what will the user name their drink order? 
    // this should also allow them to reorder nicknamed drinks?
    nickname:{
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            // requiring at least two characters
            len:[2]
        },
     },

        },

        {sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: "order",
    }
);

module.exports = Order;
