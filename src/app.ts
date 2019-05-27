import express from "express";
import compression from "compression";  // compresses requests
import session from "express-session";
import bodyParser from "body-parser";
import lusca from "lusca";
import dotenv from "dotenv";
import mongo from "connect-mongo";
import flash from "express-flash";
import path from "path";
import mongoose from "mongoose";
import passport from "passport";
import expressValidator from "express-validator";
import bluebird from "bluebird";
import { SESSION_SECRET } from "./util/secrets";
import cors from "cors";
const MongoStore = mongo(session);

// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config({ path: ".env.example" });

// API keys and Passport configuration
import { getApi, login, getPhone, getSms } from "./controllers/api";

// Create Express server
const app = express();

// Connect to MongoDB
(<any>mongoose).Promise = bluebird;

// Express configuration
app.set("port", process.env.PORT || 3001);
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: SESSION_SECRET,
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));
app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});

app.use(
  express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })
);
app.use(cors());
/**
 * Primary app routes.
 */
app.get("/", getApi);
app.get("/login", login);
app.get("/getPhone", getPhone);
app.get("/getSms", getSms);
/**
 * API examples routes.
 */

export default app;
