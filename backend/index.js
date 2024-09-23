const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
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

app.get("/contactImage", (req, res) => {
  db.collection("Contact-image")
    .find()
    .toArray()
    .then((value) => {
      res.status(200).json(value);
    });
});

app.get("/contactForm", (req, res) => {
  db.collection("Contact-form")
    .find()
    .toArray()
    .then((value) => {
      res.status(200).json(value);
    });
});

app.post("/post", (req, res) => {
  const { name, lastName, email, message } = req.body;
  db.collection("Post")
    .insertOne({ name, lastName, email, message })
    .then((value) => {
      res.status(200).json(value);
    });
});

app.get("/get", (req, res) => {
  db.collection("Post")
    .find()
    .toArray()
    .then((value) => {
      res.status(200).json(value);
    });
});

app.get("/contactTab", (req, res) => {
  db.collection("ContactTab")
    .find()
    .toArray()
    .then((value) => {
      res.status(200).json(value);
    });
});

app.get("/contactAction", (req, res) => {
  db.collection("ContactAction")
    .find()
    .toArray()
    .then((value) => {
      res.status(200).json(value);
    });
});

app.get("/aboutImage", (req, res) => {
  db.collection("About-image")
    .find()
    .toArray()
    .then((value) => {
      res.status(200).json(value);
    });
});

app.get("/aboutFlorist", (req, res) => {
  db.collection("About-Florist")
    .find()
    .toArray()
    .then((value) => {
      res.status(200).json(value);
    });
});

app.get("/aboutGoal", (req, res) => {
  db.collection("About-goal")
    .find()
    .toArray()
    .then((value) => {
      res.status(200).json(value);
    });
});

app.get("/aboutJourney", (req, res) => {
  db.collection("About-journey")
    .find()
    .toArray()
    .then((value) => {
      res.status(200).json(value);
    });
});

app.get("/aboutTeam", (req, res) => {
  db.collection("About-team")
    .find()
    .toArray()
    .then((value) => {
      res.status(200).json(value);
    });
});

app.get("/customer", (req, res) => {
  db.collection("Customer")
    .find()
    .toArray()
    .then((value) => {
      res.status(200).json(value);
    });
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "nikhilsurvanshi137@gmail.com",
    pass: "pmwd jmsd vbdl eyog",
  },
});

app.post("/send-email", (req, res) => {
  const { name, lastName, email, message } = req.body;

  const mailOptions = {
    from: "youremail@gmail.com",
    to: "nikhilsurvanshi137@gmail.com",
    subject: "New Email submission",
    text: `A new email was submitted with Name:${name} ${lastName} Email: ${email} Message:${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(404).json({ message: "sending email error" });
    } else {
      res.status(200).json({ message: "send email successfully" });
    }
  });
});
