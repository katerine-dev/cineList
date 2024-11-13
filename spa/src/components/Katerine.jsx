import React from "react";
import { Github, Linkedin } from "lucide-react";

function Katerine() {
  return (
    <nav>
      <ul>
        <li>
          <h1 className="text-lg font-medium">Katerine W</h1>
          <p className="text-xs mt-1 mb-2">
            Graduanda em Ciência da Computação - UAM
          </p>
          <div className="flex gap-2">
            <a
              href="https://github.com/katerine-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-500"
            >
              <Github />
            </a>
            <a
              href="https://www.linkedin.com/in/katerinewitkoski/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-500"
            >
              <Linkedin />
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Katerine;
