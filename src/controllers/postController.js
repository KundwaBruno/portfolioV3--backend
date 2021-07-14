import asyncHandeler from "express-async-handler";
import errorResponse from "../helpers/errorResponse";
import successResponse from "../helpers/successResponse";
import models from "../database/models/index";

const { Post, Comment, Like, Reply, Category, User } = models;

export const getPosts = asyncHandeler(async (req, res) => {
  const posts = await Post.findAll({
    include: [
      Like,
      {
        model: Comment,
        include: Reply,
      },
    ],
    order: [["updatedAt", "DESC"]],
  });
  return successResponse(res, 200, "Successfully got posts", posts);
});

export const getOnePost = asyncHandeler(async (req, res) => {
  const { title } = req.params;
  const post = await Post.findOne({
    where: { title },
    include: [Like, { model: Comment, include: Reply }, User],
    order: [["updatedAt", "DESC"]],
  });
  return successResponse(res, 200, "Successfully got one post", post);
});

export const createPost = asyncHandeler(async (req, res) => {
  const { title } = req.body;
  try {
    const exists = await Post.findOne({
      where: { title },
    });
    if (exists) {
      return successResponse(
        res,
        200,
        "Oops! There is already a post with the same title"
      );
    }
    const create = await Post.create(req.body);
    if (create) {
      return successResponse(res, 200, "Post created successfully");
    }
  } catch (e) {
    console.log(e);
    return successResponse(res, 500, `There was a problem while creating post`);
  }
});

export const getPostCategories = asyncHandeler(async (req, res) => {
  try {
    const Categories = await Category.findAll({ include: [Post] });
    return successResponse(
      res,
      200,
      "Categories generated successfull",
      Categories
    );
  } catch (e) {
    console.log(e);
    return successResponse(
      res,
      500,
      `There was a problem while generating categories`
    );
  }
});

export const getLike = asyncHandeler(async (req, res) => {
  try {
    const like = await Like.findOne({ where: req.body });
    if (like) {
      return successResponse(res, 200, { liked: true });
    } else {
      return successResponse(res, 200, { liked: false });
    }
  } catch (e) {
    console.log(e);
    return successResponse(
      res,
      500,
      `There was a problem while liking the post`
    );
  }
});

export const likePost = asyncHandeler(async (req, res) => {
  const { UserId, PostId } = req.body;
  try {
    const alreadyLiked = await Like.findOne({
      where: { UserId, PostId },
    });
    if (alreadyLiked) {
      await Like.destroy({
        where: { UserId, PostId },
      });
      return successResponse(res, 200, { liked: false });
    }
    const like = await Like.create(req.body);
    if (like) {
      return successResponse(res, 200, { liked: true });
    }
  } catch (e) {
    console.log(e);
    return successResponse(
      res,
      500,
      `There was a problem while liking the post`
    );
  }
});

export const commentPost = asyncHandeler(async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    if (comment) {
      return successResponse(res, 200, "Successfully commented");
    }
  } catch (e) {
    console.log(e);
    return successResponse(
      res,
      500,
      `There was a problem while commenting the post`
    );
  }
});

export const replyComment = asyncHandeler(async (req, res) => {
  try {
    const reply = await Reply.create(req.body);
    if (reply) {
      return successResponse(res, 200, "Successfully replied to comment");
    }
  } catch (e) {
    console.log(e);
    return successResponse(
      res,
      500,
      `There was a problem while replying the comment`
    );
  }
});
