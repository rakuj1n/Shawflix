const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");

require("dotenv").config();
require("./config/database");

const moviesRouter = require("./routes/api/moviesRoutes");

const app = express();

app.use(logger("dev"));
app.use(express.json());

app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));

app.use(require("./config/checkToken"));

//__routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/movies", moviesRouter);
app.use("/api/promotions", require("./routes/api/promotions"));
app.use("/api/tickets", require("./routes/api/tickets"));
app.use("/api/seats", require("./routes/api/seats"));
//__________

//--catch all
app.get("/*", (req, res) =>
  res.sendFile(path.join(__dirname, "build", "index.html"))
);
//----------

const port = process.env.PORT || 3001;

app.listen(port, function () {
  console.log(`Express running on port ${port}`);
});
