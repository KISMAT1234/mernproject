import express from "express";
import categoryRouter from "./categoryRouter.js";
import userRouter from "./userRouter.js";
import loginRouter from "./login.js";
import newsRouter from "./newsRouter.js";

const webRouter = express.Router();

webRouter.get("/", (req, res) => {
    res.send("Hello World");
});
webRouter.use("/login", loginRouter);
webRouter.use("/user", userRouter);
webRouter.use("/category", categoryRouter);
webRouter.use("/news", newsRouter);
export default webRouter;