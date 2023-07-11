const express = require("express");
const router = express.Router();

const ClientMovieController = require("../controllers/clientController");

router.get("/", ClientMovieController.readMovies);

router.get("/movie/:id", ClientMovieController.readMovieDetail);

module.exports = router;
