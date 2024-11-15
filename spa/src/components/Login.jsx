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
    <div className="space-y-4 p-6 bg-black rounded-md shadow flex flex-col">
      <input
        type="text"
        placeholder="email"
        className="flex-grow px-4 py-2 rounded-md text-black"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <input
        type="password"
        placeholder="senha"
        className="flex-grow px-4 py-2 rounded-md text-black"
        value={senha}
        onChange={(event) => setSenha(event.target.value)}
      />
      <button
        onClick={handleLogin}
        className="border border-amber-500 text-amber-500 px-4 py-2 rounded-md font-medium w-1/4 self-center"
      >
        Entrar
      </button>
      <button
        onClick={onRegisterButton}
        className=" text-amber-500 px-4 py-2 rounded-md font-xs self-center"
      >
        Ainda não sou cadastrada/o
      </button>
    </div>
  );
}

export default Login;
