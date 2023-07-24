const express = require("express");
const commentRouter = express.Router();
const Comment = require("../models/Comment.js");

// Add new Comment
commentRouter.post("/", (req, res, next) => {
    req.body.comment = req.auth._id;
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


module.exports = commentRouter