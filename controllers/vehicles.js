const express = require("express");

const vehicles = require("../data/vehicles");

const list = (req, res) => {
  res.json(vehicles);
};

const show = (req, res) => {
  res.json(vehicles[req.params.id - 1]);
};

const create = (req, res) => {
  const newId = vehicles.length + 1;
  console.log(req);
  req.body._id = newId;
  vehicles.push(req.body);
  res.json(vehicles[vehicles.length - 1]);
};

module.exports = { list, show, create };
