const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const contacts = require('/data/contacts');
const vehicles = require('/data/vehicles');
const comments = require('/data/comments');
const products = require('/data/products');

app.use(express.static('public'));
app.use(bodyParser.json());

// Routes to serve the data
app.get('/contacts', (req, res) => {
  res.json(contacts);
});

app.get('/vehicles', (req, res) => {
  res.json(vehicles);
});

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.get('/products', (req, res) => {
  res.json(products);
});

const port = process.env.PORT || 4001;

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
