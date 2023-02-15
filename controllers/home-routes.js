const router = require("express").Router();

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

router.get("/dashboard", (req, res) => {
   res.render("dashboard");
});
  
//dashboard route to display orders
//TODO: vet code once orders exist and can do so, then use this to replace the two lines of code above
      // router.get("/dashboard", (req, res) => {
      //   Order.findAll({
      //     attributes: [
      //      
      //       "drink",
      //       "created_at",
      //     ],
      //   })
      //     .then((dbData) => {
      //       const orders = dbData.map((order) => order.get({ plain: true }));
      //       res.render('dashboard', {
      //         orders,
      //         loggedIn: req.session.loggedIn
      //       });
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //       res.status(500).json(err);
      //     });
      // });


module.exports = router;
