var createError = require("http-errors");
var express = require("express");
var path = require("path");
const pug = require("pug");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const session = require("express-session");
require("dotenv").config();
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const loginRouter = require("./routes/login");
const apiRouter = require("./routes/api");
const userRouter = require("./routes/user");
var cors = require("cors");
// process.env.NODE_ENV = "production";
var app = express();
app.use(cors());

//view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));

let sess = session({
  resave: true,
  saveUninitialized: true,
  secret: "secret",
  cookie: { maxAge: 60 * 60 * 1000, secure: app.get("env") === "production" },
});
if (app.get("env") === "production") {
  app.set("trust proxy", 1); // trust first proxy
  // sess.cookie.secure = true; // serve secure cookies
}
app.use(sess);
app.use(express.static(path.join(__dirname, "client", "build")));
app.use("/api", apiRouter);
app.get("*", (req, res) =>
  res.sendFile(path.resolve("client", "build", "index.html"))
);

app.use("/login", loginRouter);

app.use("/user", userRouter);

// app.use("/", indexRouter);
// app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
