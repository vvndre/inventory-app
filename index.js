const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const contactsRouter = require("/routes/contacts");
const vehiclesRouter = require("/routes/vehicles");
const commentsRouter = require("/routes/comments");
const productsRouter = require("/routes/products");

app.use(express.static("public"));
app.use(bodyParser.json());

// Routes to serve the data
app.use(express.json());
app.use(express.static("./public"));
app.use(commentsRouter);
app.use(contactsRouter);
app.use(productsRouter);
app.use(vehiclesRouter);

const port = process.env.PORT || 4001;

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
