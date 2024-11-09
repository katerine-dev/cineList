import { CheckIcon, TrashIcon } from "lucide-react";

function Movies({
  movies,
  onMovieClick,
  onDeleteMovieClick,
  onClearAllMovies,
}) {
  return (
    <div className="border border-amber-500 rounded-md p-4">
      <h1 className="text-white text-xs text-left mb-2">PARA ASSISTIR</h1>
      <ul className="space-y-4 bg-amber-500 p-2 rounded-md">
        {movies.map((movie) => (
          <li key={movie.id} className="flex gap-2">
            <button className="w-full text-left flex text-black bg-white p-2 rounded-md">
              {movie.title}
            </button>
            <button
              onClick={() => onMovieClick(movie.id)}
              className="text-black bg-white p-2 rounded-md"
            >
              <CheckIcon />
            </button>
            <button
              onClick={() => onDeleteMovieClick(movie.id)}
              className="text-black bg-white p-2 rounded-md"
            >
              <TrashIcon />
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={onClearAllMovies}
        className="hover:text-black text-xs text-amber-500 py-2 px-6"
      >
        Limpar Tudo
      </button>
    </div>
  );
}

export default Movies;
