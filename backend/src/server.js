import express from "express";
import mongoose from "mongoose";
import { userRoutes } from "./routes/index";
import { PORT, NODE_ENV, MONGO_URI } from "./config";

(async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://test:admin_pass@cluster0.xal6e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      { useNewUrlParser: true }
    );
    console.log("MongoDB connected");
    const app = express();

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    const apiRouter = express.Router();
    app.use("/api", apiRouter);
    apiRouter.use("/users", userRoutes);

    app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
  } catch (err) {
    console.log(err);
  }
})();
