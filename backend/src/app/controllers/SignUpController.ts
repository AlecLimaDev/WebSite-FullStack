import { conexao } from "../database/conexao";
import { Request, Response } from "express";

class SignUpController {
  
  store(req: Request, res: Response) {
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
export default new SignUpController();
