import express from "express";
import mongoose from "mongoose";
import session from "express-session";
// import connectStore from "connect-mongo";
const MongoStore = require("connect-mongo").default;

import { userRoutes, sessionRoutes } from "./routes/index";
import {
  PORT,
  NODE_ENV,
  MONGO_URI,
  SESS_NAME,
  SESS_SECRET,
  SESS_LIFETIME,
} from "./config";

(async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://test:admin_pass@cluster0.xal6e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      { useNewUrlParser: true }
    );
    console.log("MongoDB connected");
    const app = express();
    // const MongoStore = new connectStore(session);

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    app.use(
      session({
        name: SESS_NAME,
        secret: SESS_SECRET,
        saveUninitialized: false,
        resave: false,
        store: MongoStore.create({
          // mongooseConnection: mongoose.connection,
          mongoUrl:
            "mongodb+srv://test:admin_pass@cluster0.xal6e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
          collection: "session",
          ttl: parseInt(SESS_LIFETIME) / 1000,
        }),
        cookie: {
          sameSite: true,
          secure: NODE_ENV === "production",
          maxAge: parseInt(SESS_LIFETIME),
        },
      })
    );

    const apiRouter = express.Router();
    app.use("/api", apiRouter);
    apiRouter.use("/users", userRoutes);
    apiRouter.use("/session", sessionRoutes);

    app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
  } catch (err) {
    console.log(err);
  }
})();
