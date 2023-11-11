const conexao = require("../database/conexao");

class SignUpController {
  store(req, res) {
    const { name, email, password } = req.body;
    if (!name || !email || !password) res.json("Campos obrigatórios ausentes.");

    const sql = "INSERT INTO login (name, email, password) VALUES (?, ?, ?)";

    const values = [name, email, password];
    
    conexao.query(sql, values, (err, result) => {
      if (err) res.json("Erro ao registrar o usuário. " + err.message);
      return res.json("Registro bem-sucedido. ");
    });
  }
}


// Padrão singleton
module.exports = new SignUpController();
