import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ErrorType, FormValues } from "../../types/SignUpValidation.module";
import SignUpValidation from "./SignUpValidation.module";
import S from "./SignUp.module.css";

function SignUp() {
  const navigate = useNavigate();
  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<ErrorType>({
    name: "",
    email: "",
    password: "",
  });

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = SignUpValidation(values); 
  
    if (validationErrors.name === "" && validationErrors.email === "" && validationErrors.password === "") {
      setErrors({
        name: "",
        email: "",
        password: "",
      });
  
      axios
        .post("http://localhost:8081/signup", values)
        .then(() => {
          navigate("/");
        })
        .catch((err) => console.log(err));
    } else {
      setErrors(validationErrors);
    }
  };
  

  return (
    <div className={S.Container}>
      <form action="" onSubmit={handleSubmit}>
        <h3>Registrar</h3>
        <div className={S.position}>
          <label htmlFor="name">Name: </label>
          <input
            type="name"
            name="name"
            placeholder="Coloque o seu nome"
            onChange={handleInput}
          />
          {errors.name && <span>{errors.name}</span>}
        </div>
        <div className={S.position}>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            placeholder="Coloque o seu email"
            onChange={handleInput}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div className={S.position}>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            placeholder="Coloque a sua senha"
            onChange={handleInput}
          />
          {errors.password && <span>{errors.password}</span>}
        </div>
        <button type="submit">Cadastrar</button>
        <Link to="/">Ir para tela de login 👈</Link>
        <p>Todos os direitos reservados</p>
      </form>
    </div>
  );
}

export default SignUp;
