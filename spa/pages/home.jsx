import { useState, useEffect } from "react";
import AddMovie from "./components/addMovie";
import Movies from "./components/Movies";
import MoviesSeen from "./components/MoviesSeen";
import NavBar from "./components/navBar";
import Katerine from "./components/Katerine";
import Nathalie from "./components/Nathalie";
import { v4 } from "uuid";

function App() {
  useEffect(() => {
    document.body.classList.add("bg-black", "text-white");
    return () => {
      document.body.classList.remove("bg-black", "text-white");
    };
  }, []);
  const [movies, setMovies] = useState([
    { id: 1, title: "filme 1", inSeen: false },
    { id: 2, title: "filme 2", inSeen: false },
    { id: 3, title: "filme 3", inSeen: false },
  ]);
  const [moviesSeen, setMoviesSeen] = useState([]);
  function onMovieClick(movieId) {
    const newMovies = movies.filter((movie) => movie.id !== movieId);
    const movieToMove = movies.find((movie) => movie.id === movieId);
    if (movieToMove) {
      setMoviesSeen([
        ...moviesSeen,
        { ...movieToMove, comment: "", rating: 0 },
      ]);
    }
    setMovies(newMovies);
  }
  function onDeleteMovieClick(movieId) {
    const newMovies = movies.filter((movie) => movie.id !== movieId);
    setMovies(newMovies);
  }
  function onDeleteMovieSeenClick(movieId) {
    const newMoviesSeen = moviesSeen.filter((movie) => movie.id !== movieId);
    setMoviesSeen(newMoviesSeen);
  }
  function onAddMovieSubmit(title) {
    const newMovie = { id: v4(), title, inSeen: false };
    setMovies([...movies, newMovie]);
  }
  function onClearAllMovies() {
    setMovies([]);
  }
  function onClearAllMoviesSeen() {
    setMoviesSeen([]);
  }

  return (
    <div className="w-screen h-screen flex flex-col font-josefin-sans">
      <NavBar className="fixed top-0 left-0 w-full bg-black p-4 shadow-lg z-50" />
      <div className="w-screen h-full bg-black flex justify-center p-6">
        <div className="w-[800px]" id="home">
          <img
            src="./static/CINELIST.jpg"
            alt="CINELIST LOGO"
            className="w-full mt-10 mb-10"
          />
          <p className="text-center text-white p-8 mt-10 mb-10">
            Com o CINELIST, você pode criar sua lista de de filmes perfeita! Em
            um único lugar é possível adicionar, gerenciar e acompanhar seus
            filmes favoritos de maneira simples e intuitiva. Organize sua lista
            de filmes a assistir e confira as obras já vistas, adicionando
            comentários e classificando-os conforme sua opinião. Torne sua
            experiência cinematográfica mais divertida e prática – tudo ao
            alcance de um clique!
          </p>

          <AddMovie onAddMovieSubmit={onAddMovieSubmit} />
          <div className="flex gap-4 mt-10 mb-10 " id="listas">
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
          <h1
            className="text-amber-500 mt-20 tracking-widest text-lg"
            id="sobreNos "
          >
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
          <footer className="flex justify-center items-center text-center text-xs text-white mt-16 p-4 font-sans">
            <p>Desenvolvido por Katerine Witkoski e Nathalie Taylor - 2024</p>
          </footer>
        </div>
      </div>
    </div>
  );
}
export default App;
