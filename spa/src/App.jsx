import { useEffect } from "react";
import Login from "../src/components/Login";
import { useNavigate } from "react-router-dom";

function App() {
  useEffect(() => {
    document.body.classList.add("bg-black", "text-white");
    return () => {
      document.body.classList.remove("bg-black", "text-white");
    };
  }, []);

  const navigate = useNavigate();

  const onLoginSubmit = (email) => {
    console.log("Login com:", email);
  };

  return (
    <div
      className="w-screen h-screen flex flex-col font-josefin-sans"
      role="main"
      aria-label="Página login do CINELIST"
    >
      <div className="w-screen h-full bg-black flex justify-center p-6">
        <div className="w-[800px]">
          <img
            src="./static/CINELIST.jpg"
            alt="Logo do CINELIST"
            className="w-full mt-10 mb-10"
          />

          <Login onLoginSubmit={onLoginSubmit} />

          <footer
            className="flex justify-center items-center text-center text-xs text-white mt-16 p-4 font-sans"
            aria-label="Rodapé do aplicativo"
          >
            <p>Desenvolvido por Katerine Witkoski e Nathalie Taylor - 2024</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
