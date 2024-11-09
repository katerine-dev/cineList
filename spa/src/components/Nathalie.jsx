import React from "react";
import { Github } from "lucide-react";

function Nathalie() {
  return (
    <nav>
      <ul>
        <li>
          <h1 className="text-lg font-medium">Nathalie T</h1>
          <p className="text-xs mt-1 mb-2">
            Graduanda em Ciência da Computação - UAM
          </p>
          <a
            href="https://github.com/nathalietaylor"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-500"
          >
            <Github />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nathalie;
