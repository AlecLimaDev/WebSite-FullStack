const conexao = require("../database/conexao.js");

class LoginController {
  post(req, res) {
    const sql = "SELECT * FROM login WHERE email = ? AND password = ?";

    conexao.query(sql, [req.body.email, req.body.password], (err, data) => {
      if (err) {
        return res.json("Error");
      }
      if (data.length > 0) {
        return res.json("Login efetuado com sucesso");
      } else {
        return res.json("Falha ao tentar efetuar o login");
      }
    });
  }
}
// Padrão Singleton
module.exports = new LoginController();
