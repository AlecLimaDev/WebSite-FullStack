const express = require("express");
const cors = require("cors");

const SignUpController = require("./app/controllers/SignUpController");
const LoginController = require("./app/controllers/LoginController");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/signup", SignUpController.store);
app.post("/login", LoginController.post);

app.listen(8081, () => {
  console.log("Listening");
});
