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
    // define drink column
    drink:{
        type: DataTypes.TEXT,
        
    },

    // define add-ons column
    addon: {
        type: DataTypes.TEXT,
    },
    // what will the user name their drink order? this should also allow them to reorder nicknamed drinks
    nickname:{
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            len:[2]
        },
     },



        },

        {sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "order",
    }
);

module.exports = Order;
