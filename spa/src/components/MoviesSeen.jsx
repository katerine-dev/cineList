import { ChevronDownIcon, TrashIcon } from "lucide-react";

function MoviesSeen({
  moviesSeen,
  onDeleteMovieSeenClick,
  onClearAllMoviesSeen,
}) {
  return (
    <div className="border border-amber-500 rounded-md p-4">
      <h1 className="text-white text-xs text-left mb-2">ASSISTIDOS</h1>
      <ul className="space-y-4 bg-amber-500 p-2 rounded-md">
        {moviesSeen.map((movie) => (
          <li key={movie.id} className="flex gap-2">
            <button className="w-full text-left text-black bg-white p-2 rounded-md">
              {movie.title}
            </button>
            <button className="text-black bg-white p-2 rounded-md">
              <ChevronDownIcon />
            </button>
            <button
              onClick={() => onDeleteMovieSeenClick(movie.id)}
              className="text-black bg-white p-2 rounded-md"
            >
              <TrashIcon />
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={onClearAllMoviesSeen}
        className="hover:text-black text-xs text-amber-500 py-2 px-6"
      >
        Limpar Tudo
      </button>
    </div>
  );
}

export default MoviesSeen;
