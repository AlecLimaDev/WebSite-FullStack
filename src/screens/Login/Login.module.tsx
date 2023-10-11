  import axios from "axios";
  import { useState, ChangeEvent } from "react";
  import { useNavigate, Link } from "react-router-dom";
  import S from "./Login.module.css";
  import { FormErrors, FormValues } from "../../types/LoginValidation.module";
  import LoginValidation from "./LoginValidation.module";

  function Login() {
    const navigate = useNavigate();
    const [values, setValues] = useState<FormValues>({
      email: "",
      password: "",
    });

    const [errors, setErrors] = useState<FormErrors>({});

    const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
      setValues((prev) => ({
        ...prev,
        [event.target.name]: [event.target.value],
      }));
    };

    const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
      event.preventDefault();
      setErrors(LoginValidation(values));

      // Move a verificação de erros aqui
      if (!errors.email && !errors.password) {
        axios
          .post("http://localhost:8081/login", values)
          .then((res) => {
            if (res.data === "Success") {
              navigate("/home");
            } else {
              alert("No record existed");
            }
          })
          .catch((err) => console.log(err));
      }
    };

    return (
      <div className={S.Container}>
        <form action="" onSubmit={handleSubmit}>
          <h3>Entrar</h3>
          <div className={S.position}>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              placeholder="Coloque o e-mail..."
              onChange={handleInput}
            />
            {errors.email && <span>{errors.email}</span>}
          </div>
          <div className={S.position}>
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              placeholder="Coloque a senha..."
              onChange={handleInput}
            />
            {errors.password && <span>{errors.password}</span>}
          </div>
          <button type="submit">Entrar</button>
          <p>👇 Não tem conta? Clique no Link abaixo.</p>
          <Link to="/signup">Criar Conta</Link>
          <p>Todos os direitos reservados</p>
        </form>
      </div>
    );
  }

  export default Login;
