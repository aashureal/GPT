const express = require("express");
const AuthController = require("../controller/auth.conroller");
const router = express.Router();

router.get("/register", AuthController.registerUser);
module.exports = router;
