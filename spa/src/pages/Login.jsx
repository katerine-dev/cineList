import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ onLoginSubmit }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  function handleLogin() {
    if (!email.trim() || !senha.trim()) {
      return alert("Campos obrigatórios");
    }
    onLoginSubmit(email);
    navigate(`/home?email=${email}`);
    setEmail("");
    setSenha("");
  }

  function onRegisterButton() {
    navigate("/registro");
  }

  return (
    <div
      className="space-y-4 p-6 bg-black rounded-md shadow flex flex-col"
      role="form"
      aria-labelledby="login-form-title"
    >
      <h2 id="login-form-title" className="sr-only">
        Formulário de Login
      </h2>
      <label htmlFor="email" className="sr-only">
        Email
      </label>
      <input
        id="email"
        type="text"
        placeholder="email"
        className="flex-grow px-4 py-2 rounded-md text-black"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        aria-required="true"
        aria-label="Digite seu email"
      />

      <label htmlFor="senha" className="sr-only">
        Senha
      </label>
      <input
        id="senha"
        type="password"
        placeholder="senha"
        className="flex-grow px-4 py-2 rounded-md text-black"
        value={senha}
        onChange={(event) => setSenha(event.target.value)}
        aria-required="true"
        aria-label="Digite sua senha"
      />

      <button
        onClick={handleLogin}
        className="border border-amber-500 text-amber-500 px-4 py-2 rounded-md font-medium w-1/4 self-center"
        aria-label="Entrar no sistema"
      >
        Entrar
      </button>
      <button
        onClick={onRegisterButton}
        className="text-amber-500 px-4 py-2 rounded-md font-xs self-center"
        aria-label="Ir para a página de registro"
      >
        Ainda não sou cadastrada/o
      </button>
    </div>
  );
}

export default Login;
