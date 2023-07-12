const router = require("express").Router();
const MovieController = require("../controllers/MovieController");

router.get("/", MovieController.readMovies);

router.post("/", MovieController.createMovie);

router.get("/:id", MovieController.readMovieDetail);

router.put("/:id", MovieController.updateMovie);

router.delete("/:id", MovieController.deleteMovie);

module.exports = router;
