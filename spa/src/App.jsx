// App.jsx
import { useState, useEffect } from "react";
import Login from "./components/Login";

function App() {
  useEffect(() => {
    document.body.classList.add("bg-black", "text-white");
    return () => {
      document.body.classList.remove("bg-black", "text-white");
    };
  }, []);

  // Defina a função onLoginSubmit no App
  const onLoginSubmit = (email) => {
    console.log("Login com:", email); // Aqui você pode implementar a lógica de login
  };

  return (
    <div className="w-screen h-screen flex flex-col font-josefin-sans">
      <div className="w-screen h-full bg-black flex justify-center p-6">
        <div className="w-[800px]">
          <img
            src="./static/CINELIST.jpg"
            alt="CINELIST LOGO"
            className="w-full mt-10 mb-10"
          />
          {/* Passa onLoginSubmit como uma prop para o Login */}
          <Login onLoginSubmit={onLoginSubmit} />

          <footer className="flex justify-center items-center text-center text-xs text-white mt-16 p-4 font-sans">
            <p>Desenvolvido por Katerine Witkoski e Nathalie Taylor - 2024</p>
          </footer>
        </div>
      </div>
    </div>
  );
}
export default App;
