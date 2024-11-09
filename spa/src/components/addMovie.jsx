import { useState } from "react";

function AddMovie({ onAddMovieSubmit }) {
  const [title, setTitle] = useState("");

  return (
    <div className="p-6 flex flex-row gap-4">
      <input
        type="text"
        placeholder="Digite o título do filme"
        className="flex-grow px-4 py-2 rounded-md text-black"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <button
        onClick={() => {
          if (!title.trim()) {
            return alert("Preencha o título do filme.");
          }
          onAddMovieSubmit(title);
          setTitle("");
        }}
        className=" border border-amber-500 text-amber-500 px-4 py-2 rounded-md font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddMovie;
