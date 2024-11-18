import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Registro() {
  const [CPF, setCPF] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [feedback, setFeedback] = useState("");
  const navigate = useNavigate();

  const handleCadastro = () => {
    if (!CPF.trim() || !email.trim() || !senha.trim()) {
      setFeedback("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    setFeedback("Cadastro realizado com sucesso!");
    setCPF("");
    setEmail("");
    setSenha("");
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center flex-grow py-10">
      <div className="w-full max-w-md space-y-6 p-8">
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <input
            id="CPF"
            type="text"
            placeholder="CPF"
            className="w-full px-4 py-3 rounded-md text-black"
            value={CPF}
            onChange={(event) => setCPF(event.target.value)}
            aria-required="true"
          />
          <input
            id="email"
            type="text"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-md text-black"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            aria-required="true"
          />
          <input
            id="senha"
            type="password"
            placeholder="Senha"
            className="w-full px-4 py-3 rounded-md text-black"
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
            aria-required="true"
          />
          <button
            onClick={handleCadastro}
            className="border border-amber-500 text-amber-500 px-4 py-2 rounded-md font-medium w-full"
            aria-label="Clique para cadastrar"
          >
            Cadastrar!
          </button>
          <div className="text-sm text-white mt-2">{feedback}</div>
        </form>
      </div>
    </div>
  );
}

export default Registro;
