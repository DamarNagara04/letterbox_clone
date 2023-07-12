const router = require("express").Router();

const UserController = require("../controllers/UserController");

router.get("/", UserController.getAllUser);

router.get("/:id", UserController.getUserById);

router.post("/", UserController.createUser);

router.delete("/:id", UserController.deleteUser);

module.exports = router;
