import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Registro from "./pages/Registro";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import "./index.css";

// Função chamada quando o login é realizado
const onLoginSubmit = (email) => {
  console.log("Login com:", email);
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Login onLoginSubmit={onLoginSubmit} />
      </Layout>
    ),
  },
  {
    path: "/home",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/login", // Rota para o login
    element: (
      <Layout>
        <Login onLoginSubmit={onLoginSubmit} />
      </Layout>
    ),
  },
  {
    path: "/registro",
    element: (
      <Layout>
        <Registro />
      </Layout>
    ),
  },
  {
    path: "*", // Rota para qualquer página não encontrada (erro 404)
    element: (
      <Layout>
        <div className="text-center text-white p-10">
          <h2>404 - Página Não Encontrada</h2>
          <p>
            A página que você procura não existe. Verifique o URL ou vá para a
            página inicial.
          </p>
        </div>
      </Layout>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
