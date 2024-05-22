const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const config = require("./config");

const app = express();

mongoose
  .connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(bodyParser.json());

app.use("/api/users", require("./routes/users"));
app.use("/api/friends", require("./routes/friends"));

app.listen(3000, () => {
  console.log(`Server is up and running on http://localhost:3000/`);
});
