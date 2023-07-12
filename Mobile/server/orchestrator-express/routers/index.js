const router = require("express").Router();

const MovieRouters = require("./MovieRouters");
const UserRouters = require("./UserRouters");

router.use("/movies", MovieRouters);
router.use("/users", UserRouters);

module.exports = router;
