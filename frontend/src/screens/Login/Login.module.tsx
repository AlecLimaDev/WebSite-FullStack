import S from "./Login.module.css";
import { useLogin } from "../../hooks/useLogin";
import { Link } from "react-router-dom";

function Login() {
  const { handleSubmit, handleInput, errors } = useLogin();

  return (
    <div className={S.Container}>
      <form onSubmit={handleSubmit}>
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
