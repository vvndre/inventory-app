const express = require("express");

const contacts = require("../data/contacts.js");

const list = (req, res) => {
  res.json(contacts);
};

const show = (req, res) => {
  res.json(contacts[req.params.id - 1]);
};

const create = (req, res) => {
  const newId = contacts.length + 1;
  console.log(req);
  req.body._id = newId;
  contacts.push(req.body);
  res.json(contacts[contacts.length - 1]);
};

module.exports = { list, show, create };
