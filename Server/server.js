const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");
const cors = require("cors");


app.use(express.json());

app.use(cors());


app.use("/", userRoutes);

mongoose.connect("mongodb://localhost/AirBNB", { useNewUrlParser: true });

app.listen(3000, function () {
  console.log("listening on 3000");
});
