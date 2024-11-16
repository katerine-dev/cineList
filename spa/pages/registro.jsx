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
    console.log("Redirecionando para a página inicial...");
    navigate("/");
  };

  return (
    <div className="w-screen h-screen flex flex-col font-josefin-sans">
      <div className="w-screen h-full bg-black flex justify-center p-6">
        <div className="w-[800px]">
          <img
            src="./static/CINELIST.jpg"
            alt="Logotipo do CineList"
            className="w-full mt-10 mb-10"
          />
          <div>
            <div className="space-y-4 p-6 bg-black rounded-md shadow flex flex-col">
              <label htmlFor="CPF" className="sr-only">
                CPF
              </label>
              <input
                id="CPF"
                type="text"
                placeholder="CPF"
                className="flex-grow px-4 py-2 rounded-md text-black"
                value={CPF}
                onChange={(event) => setCPF(event.target.value)}
                aria-required="true"
                aria-label="Campo de CPF, obrigatório"
              />

              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                type="text"
                placeholder="Email"
                className="flex-grow px-4 py-2 rounded-md text-black"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                aria-required="true"
                aria-label="Campo de email, obrigatório"
              />

              <label htmlFor="senha" className="sr-only">
                Senha
              </label>
              <input
                id="senha"
                type="password"
                placeholder="Senha"
                className="flex-grow px-4 py-2 rounded-md text-black"
                value={senha}
                onChange={(event) => setSenha(event.target.value)}
                aria-required="true"
                aria-label="Campo de senha, obrigatório"
              />

              <button
                onClick={handleCadastro}
                className="border border-amber-500 text-amber-500 px-4 py-2 rounded-md font-medium w-1/4 self-center"
                aria-label="Clique para cadastrar"
              >
                Cadastrar!
              </button>

              <div
                aria-live="polite"
                className="text-sm text-white mt-2"
                aria-label="Mensagem de feedback"
              >
                {feedback}
              </div>
            </div>
          </div>

          <footer className="flex justify-center items-center text-center text-xs text-white mt-16 p-4 font-sans">
            <p>Desenvolvido por Katerine Witkoski e Nathalie Taylor - 2024</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Registro;
