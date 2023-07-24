const express = require("express");
const issueRouter = express.Router();
const Issue = require("../models/Issue.js");

// Add new Issue
issueRouter.post("/", (req, res, next) => {
    req.body.issue = req.auth._id;
    const newIssue = new Issue(req.body);
    newIssue
      .save()
      .then((savedIssue) => {
        return res.status(201).send(savedIssue);
      })
      .catch((err) => {
        res.status(500);
        return next(err);
      });
  });


module.exports = issueRouter