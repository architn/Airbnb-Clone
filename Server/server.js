const MongoStore = require("connect-mongo");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const sessions = require("express-session");
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//serving public file
app.use(express.static(__dirname));
app.use(cookieParser());

app.use(
  cors({
    credentials: true,
    origin: [process.env.REACT_APP_URL],
  })
);
const oneDay = 1000 * 60 * 60 * 24;

//session middleware
let sess = {
  secret: process.env.SECRET,
  saveUninitialized: false,
  resave: false,
  store: MongoStore.create({ mongoUrl: process.env.DB_CONNECTION_STRING }),
  cookie: {
    maxAge: oneDay,
    secure: false,
    sameSite: 'lax'
  }
}

if (process.env.NODE_ENV === 'PRODUCTION') {
  app.set('trust proxy', 1); // trust first proxy
  sess.cookie.secure = true; // serve secure cookies
  sess.cookie.sameSite = 'none';
}

app.use(sessions(sess));

app.use("/", userRoutes);

app.get("/health", (req, res) => {
  res.send("Running!");
})

mongoose.connect(process.env.DB_CONNECTION_STRING, { useNewUrlParser: true });

const port = process.env.PORT || 3002
app.listen(port, function () {
  console.log(`listening on ${port}`);
});
