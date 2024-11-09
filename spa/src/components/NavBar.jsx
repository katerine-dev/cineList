import React from "react";
import { House } from "lucide-react";
import { Popcorn } from "lucide-react";
import { Ellipsis } from "lucide-react";

function NavBar() {
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

  return (
    <nav className="bg-black p-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <ul className="flex space-x-6 text-white">
          <li>
            <button onClick={onHouseClick} className="hover:text-amber-500">
              <House />
            </button>
          </li>
          <li>
            <button onClick={onPopcornClick} className="hover:text-amber-500">
              <Popcorn />
            </button>
          </li>
          <li>
            <button onClick={onEllipsisClick} className="hover:text-amber-500">
              <Ellipsis />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
