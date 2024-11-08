import { ChevronRightIcon, TrashIcon } from "lucide-react";

function Movies(props) {
  return (
    <div className=" border border-amber-500 rounded-md p-4">
      <h1 className="text-white text-xs text-left mb-2">PARA ASSISTIR</h1>
      <ul
        className="space-y-4 bg-amber-500 p-2
       rounded-md"
      >
        {props.movies.map((movie) => (
          <li key={movie.id} className="flex gap-2">
            <button className=" w-full text-left text-black bg-white p-2 rounded-md ">
              {" "}
              {movie.title}
            </button>
            <button className="text-black bg-white p-2 rounded-md ">
              <ChevronRightIcon />
            </button>
            <button className="text-black bg-white p-2 rounded-md ">
              <TrashIcon />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Movies;
