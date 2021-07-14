import { Router } from "express";
import "../configs/passport";
import passport from "passport";
import {
  getPosts,
  getPostCategories,
  createPost,
  getLike,
  likePost,
  commentPost,
  replyComment,
  getOnePost,
} from "../controllers/postController";

const postRouter = Router();

postRouter.use(passport.initialize());

postRouter.get("/", getPosts);
postRouter.get("/:title", getOnePost);
postRouter.get("/categories/get-categories", getPostCategories);
postRouter.post("/", createPost);
postRouter.post("/getlike", getLike);
postRouter.post("/like", likePost);
postRouter.post("/comment", commentPost);
postRouter.post("/comment/reply", replyComment);

export default postRouter;
