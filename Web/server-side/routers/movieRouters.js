const express = require("express");
const router = express.Router();

const MovieController = require("../controllers/moviesController");

router.get("/", MovieController.readMovies);

router.post("/", MovieController.createMovie);

router.get("/:id", MovieController.readMovieDetail);

router.put("/:id", MovieController.editMovie);

router.delete("/:id", MovieController.deleteMovie);

module.exports = router;
