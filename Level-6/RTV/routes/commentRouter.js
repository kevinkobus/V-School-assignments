const express = require("express");
const commentRouter = express.Router();
const Comment = require("../models/Comment.js");
const User = require("../models/User.js");
const { expressjwt } = require("express-jwt");
require("dotenv").config();

// Get all comments
commentRouter.get("/", (req, res, next) => {
  Comment.find({})
    .then((comments) => {
      return res.status(200).send(comments);
    })
    .catch((err) => {
      res.status(500);
      return next(err);
    });
});

// Get all comments by a specific issue
commentRouter.get("/:issueId", (req, res, next) => {
  Comment.find({ issue: req.params.issueId })
    .then((comments) => {
      return res.status(200).send(comments);
    })
    .catch((err) => {
      res.status(500);
      return next(err);
    });
});

// Add new comment
commentRouter.post("/:issueId", (req, res, next) => {
  req.body.user = req.params.issueId
  const newComment = new Comment(req.body);
  newComment
    .save()
    .then((savedComment) => {
      return res.status(201).send(savedComment);
    })
    .catch((err) => {
      res.status(500);
      return next(err);
    });
});

// Delete a comment
// Update/Edit a comment

module.exports = commentRouter;
