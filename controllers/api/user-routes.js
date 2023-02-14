const router = require("express").Router();
const { User } = require("../../models");

// get all users
router.get('/', (req, res) => {
     User.findAll({
      attributes: { exclude: ['password'] }
    })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// Create new User (localhost:3001/api/users)
router.post("/", (req, res) => {
  // expected input {"email": "email.com","password": "password123"}
  User.create({
    email: req.body.email,
    password: req.body.password,
  }).then(dbUserData => {
    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      //req.session.username = dbUserData.username;
      req.session.loggedIn = true;
  
      res.json(dbUserData);
    });
  })
});

//user login and identity verification (/api/users/login)
router.post("/login", (req, res) => {
  // expected input {"email": "email.com","password": "password123"}
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then((dbUserData) => {
    if (!dbUserData) {
      res.status(400).json({ message: "No user with that email address!" });
      return;
    }
    const validPassword = dbUserData.checkPassword(req.body.password);
    if (!validPassword) {
      res.status(400).json({ message: "Incorrect password!" });
      return;
    }
    req.session.save(() => {
      // declare session variables
      req.session.user_id = dbUserData.id;
      //req.session.username = dbUserData.username;
      req.session.loggedIn = true;

      res.json({ user: dbUserData, message: 'You are now logged in!' });
    });
  });
});

//User Log-Out (/api/users/logout)
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
