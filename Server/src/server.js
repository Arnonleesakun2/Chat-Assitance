const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const app = express();
const { readdirSync } = require("fs");
require("dotenv").config();

app.use(morgan("dev"));
app.use(cors());
app.use(helmet());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

app.use((req, res, next) => {
  res.setTimeout(120000, () => {
    console.log("Request has timed out.");
    res.status(408).send("Request has timed out");
  });
  next();
});

readdirSync("./src/routes").map((r) =>
  app.use("/api", require("./routes/" + r))
);

app.listen(5001, () => {
  console.log("Server is running on port 5001");
});
