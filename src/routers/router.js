import { Router } from "express";
import welcome from "../controllers/welcome";
import userRouter from "./userRouter";
import personaRouter from "./personaRouter";
import postsRouter from "./postsRouter";
import messageRouter from "./messageRouter";

const router = Router();

router.get("/", welcome);
router.use("/users", userRouter);
router.use("/portfolio", personaRouter);
router.use("/posts", postsRouter);
router.use("/message", messageRouter);
export default router;
