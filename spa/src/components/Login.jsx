// Login.jsx
import { useState } from "react";

function Login({ onLoginSubmit }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <div className="space-y-4 p-6 bg-black rounded-md shadow flex flex-col">
      <div></div>
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
        onClick={() => {
          if (!email.trim() || !senha.trim()) {
            return alert("Campos obrigatórios");
          }
          onLoginSubmit(email);
          setEmail("");
          setSenha("");
        }}
        className="border border-amber-500 text-amber-500 px-4 py-2 rounded-md font-medium"
      >
        Entrar
      </button>
    </div>
  );
}
export default Login;
