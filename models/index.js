// Import models
const User = require("./User");

const Order = require("./Order");

// bring the tables together | model associations
// user to order relationship = one-to-many relationship bc a user can have many orders

User.hasMany(Order, {
    foreignKey: 'user_id'
});

Order.belongsTo(User, {
    foreignKey: 'order_id'
});



// Export as an object
module.exports = { User, Order };
