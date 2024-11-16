import { useState } from "react";

function AddMovie({ onAddMovieSubmit }) {
  const [title, setTitle] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleAddMovie = () => {
    if (!title.trim()) {
      setFeedback("Por favor, preencha o título do filme.");
      return;
    }

    onAddMovieSubmit(title);
    setTitle("");
    setFeedback("Filme adicionado com sucesso!");
  };

  return (
    <div className="p-6 flex flex-row gap-4">
      <label htmlFor="movieTitle" className="sr-only">
        Título do Filme
      </label>
      <input
        id="movieTitle"
        type="text"
        placeholder="Digite o título do filme"
        className="flex-grow px-4 py-2 rounded-md text-black"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        aria-required="true"
        aria-label="Digite o título do filme"
      />

      <button
        onClick={handleAddMovie}
        className="border border-amber-500 text-amber-500 px-4 py-2 rounded-md font-medium"
        aria-label="Adicionar filme à lista"
      >
        Adicionar
      </button>

      <div
        aria-live="polite"
        className="text-sm text-black mt-2"
        aria-label="Mensagem de feedback"
      >
        {feedback}
      </div>
    </div>
  );
}

export default AddMovie;
