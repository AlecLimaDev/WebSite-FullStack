import express from "express"
import cors from "cors"

import SignUpController from "./app/controllers/SignUpController";
import LoginController from "./app/controllers/LoginController";

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
