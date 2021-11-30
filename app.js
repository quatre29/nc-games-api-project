const express = require("express");

const apiRouter = require("./routes/apiRoutes");
const {
  handleCustomErrors,
  handleServerErrors,
  handlePsqlErrors,
} = require("./errors/index");

const app = express();

app.use(express.json());
app.use("/api", apiRouter);

app.all("*", (req, res) => {
  res.status(404).send({ msg: "Path not found!" });
});
//=========== Errors ===========

app.use(handleCustomErrors);
app.use(handlePsqlErrors);
app.use(handleServerErrors);

module.exports = app;
