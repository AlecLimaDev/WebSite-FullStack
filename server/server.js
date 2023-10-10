
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());



const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ,
  database: "signup"
});

app.post("/signup", (req, res) => {
  const { name, email, password } = req.body;

  // Verifique se todos os campos necessários foram fornecidos
  if (!name || !email || !password) {
    return res.json("Campos obrigatórios ausentes.");
  }

  // Aqui você deve inserir os dados na tabela 'login' no banco de dados
  const sql = "INSERT INTO login (name, email, password) VALUES (?, ?, ?)";
  const values = [name, email, password];

  db.query(sql, values, (err, result) => {
    if (err) {
      return res.json("Erro ao registrar o usuário.");
    }
    return res.json("Registro bem-sucedido.");
  });
});

app.post("/login", (req, res) => {
  const sql = "SELECT * FROM login WHERE email = ? AND password = ?";

  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) {
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json("Success");
    } else {
      return res.json("Falha");
    }
  });
});

app.listen(8081, () => {
  console.log("Listening");
});