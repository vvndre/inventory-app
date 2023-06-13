const express = require("express");

const comments = require("../data/comments");

const list = (req, res) => {
  res.json(comments);
};

const show = (req, res) => {
  res.json(comments[req.params.id - 1]);
};

const create = (req, res) => {
  const newId = comments.length + 1;
  console.log(req);
  req.body._id = newId;
  comments.push(req.body);
  res.json(comments[comments.length - 1]);
};

module.exports = { list, show, create };
