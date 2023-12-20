const authController = require("../controllers/AuthController");
const express = require("express");
const authRouter = express.Router();

authRouter.post("/sign-in", authController.SignIn);
authRouter.post("/sign-up", authController.SignUp);

module.exports = authRouter;
