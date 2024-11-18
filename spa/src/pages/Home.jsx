import React, { useState, useEffect } from "react";
import { v4 } from "uuid";
import { useSearchParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import AddMovie from "../components/AddMovie";
import Movies from "../components/Movies";
import MoviesSeen from "../components/MoviesSeen";
import Katerine from "../components/Katerine";
import Nathalie from "../components/Nathalie";

function Home() {
  useEffect(() => {
    document.body.classList.add("bg-black", "text-white");
    return () => {
      document.body.classList.remove("bg-black", "text-white");
    };
  }, []);

  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");

  const [movies, setMovies] = useState([
    { id: 1, title: "filme 1", inSeen: false },
    { id: 2, title: "filme 2", inSeen: false },
    { id: 3, title: "filme 3", inSeen: false },
  ]);

  const [moviesSeen, setMoviesSeen] = useState([]);

  const onMovieClick = (movieId) => {
    const updatedMovies = movies.filter((movie) => movie.id !== movieId);
    const movieToMove = movies.find((movie) => movie.id === movieId);
    if (movieToMove) {
      setMoviesSeen([
        ...moviesSeen,
        { ...movieToMove, comment: "", rating: 0 },
      ]);
    }
    setMovies(updatedMovies);
  };

  const onAddMovieSubmit = (title) => {
    const newMovie = { id: v4(), title, inSeen: false };
    setMovies([...movies, newMovie]);
  };

  const onDeleteMovieClick = (movieId) => {
    setMovies(movies.filter((movie) => movie.id !== movieId));
  };

  const onDeleteMovieSeenClick = (movieId) => {
    setMoviesSeen(moviesSeen.filter((movie) => movie.id !== movieId));
  };

  const onClearAllMovies = () => setMovies([]);
  const onClearAllMoviesSeen = () => setMoviesSeen([]);

  return (
    <div className="w-screen bg-black flex flex-col">
      {/* NavBar */}
      <NavBar />

      <div className="w-screen bg-black flex justify-center p-6 flex-grow">
        <div>
          <div id="cinelist">
            <p className="text-center text-white mb-4">{email}</p>
            <p className="text-center text-white p-8 mt-10 mb-10">
              Com o CINELIST, você pode criar sua lista de filmes perfeita! Em
              um único lugar é possível adicionar, gerenciar e acompanhar seus
              filmes favoritos de maneira simples e intuitiva. Organize sua
              lista de filmes a assistir e confira as obras já vistas,
              adicionando comentários e classificando-os conforme sua opinião.
            </p>
          </div>

          <AddMovie onAddMovieSubmit={onAddMovieSubmit} />

          <div className="flex gap-4 mt-10 mb-10" id="listas">
            <div className="flex-1">
              <Movies
                movies={movies}
                onMovieClick={onMovieClick}
                onDeleteMovieClick={onDeleteMovieClick}
                onClearAllMovies={onClearAllMovies}
              />
            </div>
            <div className="flex-1">
              <MoviesSeen
                moviesSeen={moviesSeen}
                onDeleteMovieSeenClick={onDeleteMovieSeenClick}
                onClearAllMoviesSeen={onClearAllMoviesSeen}
              />
            </div>
          </div>

          <section id="sobreNos" className="text-center mt-20">
            <h1 className="text-amber-500 tracking-widest text-lg mb-4">
              SOBRE NÓS
            </h1>
            <div className="flex mt-4">
              <div className="flex items-center space-x-2 w-1/2">
                <img
                  src="./static/sapiens-avatar.png"
                  alt="Avatar Katerine"
                  className="w-32 h-32 rounded-full"
                />
                <Katerine />
              </div>
              <div className="flex items-center space-x-2 w-1/2">
                <img
                  src="./static/sapiens-avatar-2.png"
                  alt="Avatar Nathalie"
                  className="w-32 h-32 rounded-full"
                />
                <Nathalie />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home;
