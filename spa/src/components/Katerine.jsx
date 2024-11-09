import React from "react";
import { Github } from "lucide-react";

function Katerine() {
  return (
    <nav>
      <ul>
        <li>
          <h1 className="text-lg font-medium">Katerine W</h1>
          <p className="text-xs mt-1 mb-2">
            Graduanda em Ciência da Computação - UAM
          </p>
          <a
            href="https://github.com/katerine-dev"
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

export default Katerine;
