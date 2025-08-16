const { Router } = require("express");
const { registerUser } = require("../controllers/auth.controller");
const router = Router();

// Auth APIs
router.post("/register", registerUser);

module.exports = router;
