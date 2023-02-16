const router = require("express").Router();
const { Order } = require("../models");
const withAuth = require("../utils/auth");

router.get("/dashboard", withAuth, (req, res) => {
  Order.findAll({
      limit: 1,
      where: {
      },
      order: [ [ 'createdAt', 'DESC' ]],
    include: [
      {
        model: User,
        attributes: ["email"],
      }
    ],
  })
    .then((dbData) => {
      console.log(dbData);
      // serialize data before passing to template
      const orders = dbData.map((order) => order.get({ plain: true }));
      res.render("dashboard", { orders, loggedIn: true });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;

