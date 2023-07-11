const express = require("express");
const router = express.Router();

const GenreController = require("../controllers/genresController");

router.get("/", GenreController.readGenres);

router.post("/", GenreController.createGenre);

router.get("/:id", GenreController.readGenreDetail);

router.put("/:id", GenreController.editGenre);

router.delete("/:id", GenreController.deleteGenre);

module.exports = router;
