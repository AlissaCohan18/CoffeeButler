const router = require("express").Router();
const { User } = require("../../models");

// Create new User (localhost:3001/api/users)
router.post("/", (req, res) => {
  // expected input {"username": "YourUserName","email": "email.com","password": "password123"}
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  }).then((dbUserData) => {
    res.json(dbUserData);
  });
});

//user login and identity verification (/api/users/login)
router.post("/login", (req, res) => {
  // expected input {email: 'email.com', password: 'password1234'}
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
    res.json({ user: dbUserData, message: "You are now logged in!" });
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
