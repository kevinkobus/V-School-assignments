const express = require("express");
const issueRouter = express.Router();
const Issue = require("../models/Issue.js");

// Get All Issues
issueRouter.get("/", (req, res, next) => {
  Issue.find({})
    .then((issues) => {
      return res.status(200).send(issues);
    })
    .catch((err) => {
      res.status(500);
      return next(err);
    });
});

// Add new Issue
issueRouter.post("/", (req, res, next) => {
  req.body.user = req.auth._id;
  const newIssue = new Issue(req.body);
  newIssue
    .save()
    .then((res) => console.log(res))
    .then((savedIssue) => {
      return res.status(201).send(savedIssue);
    })
    .catch((err) => {
      res.status(500);
      return next(err);
    });
});

// Delete Issue
issueRouter.delete("/:issueId", (req, res, next) => {
  Issue.findOneAndDelete({ _id: req.params.issueId, user: req.auth._id })
    .then((deletedIssue) => {
      if (!deletedIssue) {
        return res.status(404).send("Issue not found");
      }
      return res
        .status(200)
        .send(
          `Successfully deleted Issue: ${deletedIssue.title} from the database`
        );
    })
    .catch((err) => {
      res.status(500);
      return next(err);
    });
});

// Update Issue
issueRouter.put("/:issueId", (req, res, next) => {
  Issue.findOneAndUpdate(
    { _id: req.params.issueId, user: req.auth._id },
    req.body,
    { new: true }
  )
    .then((updatedIssue) => {
      if (!updatedIssue) {
        return res.status(404).send("Issue not found");
      }
      return res.status(200).send(updatedIssue);
    })
    .catch((err) => {
      res.status(500);
      return next(err);
    });
});

// Get issues by user id
issueRouter.get("/user", (req, res, next) => {
  Issue.find({ user: req.auth._id })
    .then((foundIssues) => {
      if (!foundIssues) {
        return res.status(404).send("Issue not found");
      }
      return res.status(200).send(foundIssues);
    })
    .catch((err) => {
      res.status(500);
      return next(err);
    });
});

module.exports = issueRouter;
