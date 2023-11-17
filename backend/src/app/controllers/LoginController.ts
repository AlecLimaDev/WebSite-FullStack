import { conexao } from "../database/conexao";
import { Request, Response } from 'express';
 

class LoginController {
  
  post(req: Request, res: Response) {
    const sql = "SELECT * FROM login WHERE email = ? AND password = ?";

    conexao.query(sql, [req.body.email, req.body.password], (err, data) => {
      if (err) {
        return res.json("Error");
      }
      if (data.length > 0) {
        return res.json("Login efetuado com sucesso");
      } else {
        return res.json("Falha ao tentar efetuar o login ");
      }
    });
  }
}

// Padrão Singleton
export default new LoginController();
