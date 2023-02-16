const router = require("express").Router();
const { Order } = require("../models");

router.get("/", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("dashboard");
    return;
  }
  res.render("homepage");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

//dashboard route to display orders
router.get("/dashboard", (req, res) => {
  Order.findAll({
    limit: 1,
    where: {
    },
    order: [ [ 'createdAt', 'DESC' ]],
  include: [

  ],
})
    .then((dbData) => {
      console.log(dbData);
      const orders = dbData.map((order) => order.get({ plain: true }));
      console.log(orders);
      res.render("dashboard", {
        orders,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
