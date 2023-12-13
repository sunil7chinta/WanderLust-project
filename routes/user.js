const express = require("express");
const router = express.Router();
const userController = require("../controllers/users");
const { saveRedirectUrl } = require("../Middleware");
const passport = require("passport");

//signUp
router
  .route("/signup")
  .get(userController.renderSignupForm)
  .post(userController.signUp);

//Login
router
  .route("/login")
  .get(userController.renderLoginForm)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureFlash: true,
      failureRedirect: "/login",
    }),
    userController.login
  );

//logout
router.route("/logout").get(userController.logout);

module.exports = router;
