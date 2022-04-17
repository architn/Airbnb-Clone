const MongoStore = require("connect-mongo");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const sessions = require("express-session");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//serving public file
app.use(express.static(__dirname));
app.use(cookieParser());

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
  })
);
const oneDay = 1000 * 60 * 60 * 24;

//session middleware
app.use(
  sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized: false,
    cookie: { maxAge: oneDay },
    resave: false,
    store: MongoStore.create({ mongoUrl: "mongodb://localhost/AirBNB" }),
  })
);

app.use("/", userRoutes);

mongoose.connect("mongodb://localhost/AirBNB", { useNewUrlParser: true });

app.listen(3002, function () {
  console.log("listening on 3002");
});
