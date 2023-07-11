const express = require("express");
const router = express.Router();

const genreRouter = require("./genreRouters");
const movieRouter = require("./movieRouters");
const clientRouter = require("./clientRouter");

const authenticate = require("../middleware/authenticate");

const UserController = require("../controllers/userControllers");

router.use("/login", UserController.loginController);

router.use("/register", authenticate, UserController.registerController);

router.use("/movies", authenticate, movieRouter);

router.use("/genre", authenticate, genreRouter);

router.use("/client", clientRouter);

module.exports = router;
