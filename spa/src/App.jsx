import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./components/Login";

function App() {
  useEffect(() => {
    document.body.classList.add("bg-black", "text-white");
    return () => {
      document.body.classList.remove("bg-black", "text-white");
    };
  }, []);

  const navigate = useNavigate();

  // Função que será chamada pelo Login
  const onLoginSubmit = (email) => {
    console.log("Login com:", email);
    navigate(`/home?email=${email}`);
  };

  return (
    <div
      className="w-screen h-screen flex flex-col font-josefin-sans"
      role="main"
    >
      <div className="w-screen h-full bg-black flex justify-center p-6">
        <Login onLoginSubmit={onLoginSubmit} />
      </div>
    </div>
  );
}

export default App;
