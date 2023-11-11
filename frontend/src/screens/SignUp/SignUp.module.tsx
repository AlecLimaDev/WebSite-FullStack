import { Link } from "react-router-dom";
import { useSignUp } from "../../hooks/useSignUp";
import S from "./SignUp.module.css";

function SignUp() {
  const { errors, handleInput, handleSubmit } = useSignUp();

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
