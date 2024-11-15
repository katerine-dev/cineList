import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Registro({ onRegistroSubmit }) {
  const [CPF, setCPF] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen flex flex-col font-josefin-sans">
      <div className="w-screen h-full bg-black flex justify-center p-6">
        <div className="w-[800px]">
          <img
            src="./static/CINELIST.jpg"
            alt="CINELIST LOGO"
            className="w-full mt-10 mb-10"
          />
          <div>
            <div className="space-y-4 p-6 bg-black rounded-md shadow flex flex-col">
              <input
                type="text"
                placeholder="CPF"
                className="flex-grow px-4 py-2 rounded-md text-black"
                value={CPF}
                onChange={(event) => setCPF(event.target.value)}
              />
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
                  if (!CPF.trim() || !email.trim() || !senha.trim()) {
                    return alert("Campos são obrigatórios");
                  }
                  alert("Cadastro realizado com sucesso!");
                  onRegistroSubmit({ CPF, email, senha });
                  setCPF("");
                  setEmail("");
                  setSenha("");
                  navigate("/");
                }}
                className="border border-amber-500 text-amber-500 px-4 py-2 rounded-md font-medium w-1/4 self-center"
              >
                Cadastrar!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registro;
