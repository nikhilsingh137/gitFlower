const express = require("express");
const cors = require("cors");
const port = 4000;
const app = express();
const { connectToDb, getData } = require("./db");

app.use(express.json());
app.use(cors());

let db;
connectToDb((err) => {
  if (!err) {
    app.listen(port, function () {
      console.log("running server");
    });
  } else {
    console.log("server running failed");
  }
  db = getData();
});

app.get("/header", (req, res) => {
  db.collection("header")
    .find()
    .toArray()
    .then((value) => {
      res.status(200).json(value);
    });
});
app.get("/imageContent", (req, res) => {
  db.collection("ImageboxContent")
    .find()
    .toArray()
    .then((value) => {
      res.status(200).json(value);
    });
});

app.get("/onlineData", (req, res) => {
  db.collection("OnlineData")
    .find()
    .toArray()
    .then((value) => {
      res.status(200).json(value);
    });
});

app.get("/image", (req, res) => {
  db.collection("About")
    .find()
    .toArray()
    .then((value) => {
      res.status(200).json(value);
    });
});

app.get("/shop", (req, res) => {
  db.collection("FlowerShop")
    .find()
    .toArray()
    .then((value) => {
      res.status(200).json(value);
    });
});

app.get("/shopsection", (req, res) => {
  db.collection("ShopRoute")
    .find()
    .toArray()
    .then((value) => {
      res.status(200).json(value);
    });
});

app.get("/productSelling", (req, res) => {
  db.collection("productSelling")
    .find()
    .toArray()
    .then((value) => {
      res.status(200).json(value);
    });
});

app.get("/productRoute", (req, res) => {
  db.collection("productRoute")
    .find()
    .toArray()
    .then((value) => {
      res.status(200).json(value);
    });
});

app.get("/special", (req, res) => {
  db.collection("SpecialData")
    .find()
    .toArray()
    .then((value) => {
      res.status(200).json(value);
    });
});

app.get("/footer", (req, res) => {
  db.collection("Footer")
    .find()
    .toArray()
    .then((value) => {
      res.status(200).json(value);
    });
});
