if (process.env.NODE_ENV != "production") {
  require("dotenv").config({ path: "../.env" });
}

const PORT = process.env.PORT || 3000;
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const mongoose = require("mongoose");
const Listing = require("./models/listing");
const ExpressError = require("./utils/ExpressError");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user");

const listingRouter = require("./routes/listing");
const reviewRouter = require("./routes/review");
const userRouter = require("./routes/user");

const session = require("express-session");
const MongoStore = require("connect-mongo").default;
const flash = require("connect-flash");

//connecting to the database
async function startServer() {
  try {
    await mongoose.connect(process.env.ATLASDB_URL);
    console.log("MongoDB connected");

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("MongoDB connection failed:", err);
    process.exit(1);
  }
}

startServer();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);

const store = MongoStore.create({
  mongoUrl: process.env.ATLASDB_URL,
  crypto: {
    secret: process.env.SECRET,
  },
  touchAfter: 24 * 3600,
});
store.on("error", (err) => {
  console.log("ERROR IN MONGO SESSION STORE", err);
});
const sessionOptions = {
  store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

app.use(session(sessionOptions));
app.use(flash());
//authentication
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  res.locals.currUser = req.user;
  res.locals.successMsg = req.flash("success");
  res.locals.errorMsg = req.flash("error");
  return next();
});
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Calling to the root route
app.get("/", async (req, res) => {
  let Listings = await Listing.find({});
  res.render("./listings/index.ejs", { Listings });
});

app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", userRouter);

// Error Handling
app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page Not Found!"));
});

app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  let { statusCode = 500, message = "something went wrong" } = err;
  res.status(statusCode).render("./listings/error.ejs", { err });
});
