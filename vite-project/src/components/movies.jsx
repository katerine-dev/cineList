function Movies({ movie, onMovieClick, onMoviesTaskClick }) {
  return (
    <ul className=" space-y-4 p-6 border-amber-500 rounded-md">
      {tasks.map((movie) => (
        <li key={movie.id} className="flex gap-2">
          <button
            onClick={() => onMovieClick(movie.id)}
            className={`bg-white text-left w-full flex items-center gap-2 text-black p-2 rounded-md ${
              movie.isCompleted && "line-through"
            }`}
          >
            {movie.title}
          </button>

          <button
            onClick={() => onDeleteMovieClick(movie.id)}
            className="bg-slate-400 text-white p-2 rounded-md"
          >
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}
export default Movies;
