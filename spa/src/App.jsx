import { useState } from "react";
import AddMovie from "./components/addMovie";
import Movies from "./components/Movies";
import MoviesSeen from "./components/MoviesSeen";

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "filme 1",
      inSeen: false,
    },
    {
      id: 2,
      title: "filme 2",
      inSeen: false,
    },
    {
      id: 3,
      title: "filme 3",
      inSeen: false,
    },
  ]);

  return (
    <div className="w-screen h-screen bg-black flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className=" text-3xl font-bold text-center text-white">CINELIST</h1>
        <p className="text-center text-white p-11">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          ducimus corrupti sint, magni iste error nihil ipsum nobis aperiam ea
          laudantium facilis quisquam voluptatibus ratione? Voluptatibus illum
          perferendis officiis facere.
        </p>
        <AddMovie />
        <div>
          <Movies movies={movies} />
          <MoviesSeen />
        </div>
        <h1>SOBRE NÓS</h1>
      </div>
    </div>
  );
}

export default App;
