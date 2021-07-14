import { Router } from "express";
import "../configs/passport";
import passport from "passport";
import { getMessages, sendMessage } from "../controllers/messageController";

const messageRouter = Router();

messageRouter.use(passport.initialize());

messageRouter.get("/", getMessages);
messageRouter.post("/", sendMessage);

export default messageRouter;
