if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const cors = require("cors");
const express = require("express");
const app = express();
const router = require("./routers/index");

const port = process.env.PORT || 4002;

const errorHandler = require("./middleware/errorHandler");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", router);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

module.exports = app;
