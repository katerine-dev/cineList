import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Atualização aqui
import Home from "./pages/Home";
import Registro from "./pages/Registro";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import "./index.css";

// Função chamada quando o login é realizado
const onLoginSubmit = (email) => {
  console.log("Login com:", email);
};

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Login onLoginSubmit={onLoginSubmit} />
            </Layout>
          }
        />
        <Route
          path="/home"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <Login onLoginSubmit={onLoginSubmit} />
            </Layout>
          }
        />
        <Route
          path="/registro"
          element={
            <Layout>
              <Registro />
            </Layout>
          }
        />
        {/* Rota para lidar com qualquer página não encontrada */}
        <Route
          path="*"
          element={
            <Layout>
              <div className="text-center text-white p-10">
                <h2>404 - Página Não Encontrada</h2>
                <p>
                  A página que você procura não existe. Verifique o URL ou vá
                  para a página inicial.
                </p>
              </div>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
