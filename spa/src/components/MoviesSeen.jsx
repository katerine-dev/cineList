import {
  ChevronDownIcon,
  ChevronUpIcon,
  TrashIcon,
  StarIcon,
} from "lucide-react";
import { useState } from "react";

function MoviesSeen({
  moviesSeen,
  onDeleteMovieSeenClick,
  onClearAllMoviesSeen,
}) {
  const [movieComments, setMovieComments] = useState({});
  const [openForm, setOpenForm] = useState({});
  const [lockedFields, setLockedFields] = useState({});

  const handleCommentChange = (id, comment) => {
    setMovieComments((prevComments) => ({
      ...prevComments,
      [id]: { ...prevComments[id], comment },
    }));
  };

  const handleRatingChange = (id, rating) => {
    setMovieComments((prevComments) => ({
      ...prevComments,
      [id]: { ...prevComments[id], rating },
    }));
  };

  const handleCommentKeyPress = (id, e) => {
    if (e.key === "Enter") {
      setLockedFields((prev) => ({ ...prev, [id]: true }));
    }
  };

  const toggleForm = (id) => {
    setOpenForm((prevOpenForm) => ({
      ...prevOpenForm,
      [id]: !prevOpenForm[id],
    }));
  };

  return (
    <div className="border border-amber-500 rounded-md p-4">
      <h1 className="text-white text-xs text-left mb-2 font-josefin-sans tracking-widest">
        ASSISTIDOS
      </h1>
      <ul className="space-y-4 bg-amber-500 p-2 rounded-md">
        {moviesSeen.map((movie) => (
          <li key={movie.id} className="space-y-2">
            <div className="flex gap-2 items-center">
              <button className="w-full text-left text-black bg-white p-2 rounded-md font-josefin-slab text-s">
                {movie.title}
              </button>
              <button
                onClick={() => toggleForm(movie.id)}
                className="text-black bg-white p-2 rounded-md"
              >
                {openForm[movie.id] ? <ChevronUpIcon /> : <ChevronDownIcon />}
              </button>
              <button
                onClick={() => onDeleteMovieSeenClick(movie.id)}
                className="text-black bg-white p-2 rounded-md"
              >
                <TrashIcon />
              </button>
            </div>

            {openForm[movie.id] && (
              <div className="flex flex-col text-black bg-white p-2 rounded-md">
                <label className="text-xs">Comentário:</label>
                <input
                  type="text"
                  placeholder="Deixe um comentário"
                  value={movieComments[movie.id]?.comment || ""}
                  onChange={(e) =>
                    handleCommentChange(movie.id, e.target.value)
                  }
                  onKeyDown={(e) => handleCommentKeyPress(movie.id, e)}
                  disabled={lockedFields[movie.id]}
                  className="p-1 border border-gray-300 rounded-md"
                />
                <label className="text-xs mt-2">Nota:</label>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon
                      key={star}
                      onClick={() => handleRatingChange(movie.id, star)}
                      className={`cursor-pointer ${
                        star <= (movieComments[movie.id]?.rating || 0)
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}
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
