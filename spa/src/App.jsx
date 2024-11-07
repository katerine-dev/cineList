import Movies from "./components/movies";
import AddMovie from "./components/addMovie";
import MooviesSeen from "./components/MoviesSeen";
import { useState } from "react";

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "filme 1",
      isSeen: false,
    },
    {
      id: 2,
      title: "filme 2",
      isSeen: false,
    },
  ]);

  function onMovieClick(movieId) {
    const newMovies = movies.map((movie) => {
      if (movie.id == movieId) {
        return { ...movie, isSeen: !movie.isSeen };
      } else {
        return movie;
      }
    });

    setMovies(newMovies);
  }

  function onDeleteMovieClick(movieId) {
    const newMovies = movies.filter((movie) => movie.id !== movieId);
    setMovies(newMovies);
  }

  return (
    <div className="w-screen h-screen bg-black flex justify-center p-6 ">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl font-bold text-center">CINELIST</h1>
        <p className="text-center text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nulla
          suscipit ex amet ad quae velit dolorem, quis ratione soluta nemo.
          Molestiae expedita suscipit explicabo vitae quaerat, reprehenderit
          harum ex!
        </p>
        <AddMovie />
        <div className="flex space-x-4">
          <Movies />
          <MooviesSeen />
        </div>
        <div className="flex space-x-4">
          <h4>KW</h4>
          <h4>NT</h4>
        </div>
      </div>
    </div>
  );
}

export default App;
