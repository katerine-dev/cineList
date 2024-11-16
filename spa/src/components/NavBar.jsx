import React, { useState } from "react";
import { House, Popcorn, Ellipsis, CircleUser } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");

  const onHouseClick = () => {
    const cinelistSection = document.getElementById("cinelist");
    cinelistSection?.scrollIntoView({ behavior: "smooth" });
  };

  const onPopcornClick = () => {
    const listasSection = document.getElementById("listas");
    listasSection?.scrollIntoView({ behavior: "smooth" });
  };

  const onEllipsisClick = () => {
    const sobreNosSection = document.getElementById("sobreNos");
    sobreNosSection?.scrollIntoView({ behavior: "smooth" });
  };

  const onUserClick = () => {
    setShowMenu((prev) => !prev);
  };

  const onLogoutClick = () => {
    navigate("/");
  };

  return (
    <nav
      className="bg-black p-4 fixed top-0 left-0 w-full shadow-md z-50"
      role="navigation"
      aria-label="Barra de Navegação"
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <ul className="flex space-x-6 text-white">
          <li>
            <button
              onClick={onHouseClick}
              className="hover:text-amber-400"
              aria-label="Ir para seção principal do CINELIST"
            >
              <House aria-hidden="true" />
            </button>
          </li>
          <li>
            <button
              onClick={onPopcornClick}
              className="hover:text-amber-500"
              aria-label="Ir para a seção de listas"
            >
              <Popcorn aria-hidden="true" />
            </button>
          </li>
          <li>
            <button
              onClick={onEllipsisClick}
              className="hover:text-amber-400"
              aria-label="Ir para a seção sobre nós"
            >
              <Ellipsis aria-hidden="true" />
            </button>
          </li>
        </ul>

        <div className="relative">
          <p className="text-white">{email}</p>
          <button
            onClick={onUserClick}
            className="text-white hover:text-amber-400"
            aria-label="Menu do usuário"
            aria-expanded={showMenu}
            aria-haspopup="true"
          >
            <CircleUser aria-hidden="true" />
          </button>

          {showMenu && (
            <div
              className="absolute right-0 mt-2 bg-black text-white border border-gray-700 rounded shadow-md z-50"
              role="menu"
              aria-label="Opções do menu do usuário"
            >
              <ul className="flex flex-col">
                <li>
                  <button
                    onClick={onLogoutClick}
                    className="block px-4 py-2 hover:bg-gray-800 text-left w-full"
                    role="menuitem"
                    aria-label="Sair e voltar à página de login"
                  >
                    Sair
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
