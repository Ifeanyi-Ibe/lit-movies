import { useState, useContext } from "react";
import MovieCard from "./MovieCard";
import { Context } from "../store/context";

const MovieList = ({ movies }) => {
  const [query, setQuery] = useState(null);
  const { getMovieByTitle } = useContext(Context);

  const getMoviesBySearch = async () => {
    if (query && query != "") {
      await getMovieByTitle(query);
    }
  };

  return (
    <div className="my-4">
      <form className="form mx-3">
        <label htmlFor="query" className="label">
          <span className="label--title">Search for a movie:</span>
        </label>
        <input
          type="text"
          name="query"
          placeholder="Enter movie title"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="button bg-purple-800 rounded-md text-white px-8 text-sm py-3 mb-4"
          type="button"
          onClick={getMoviesBySearch}
        >
          Go
        </button>
      </form>
      <div className="flex flex-col space-y-4 sm:grid sm:grid-cols-2 sm:gap-4">
        {movies.map(
          (movie) =>
            movie.poster_path != null && (
              <MovieCard key={movie.id} movie={movie} />
            )
        )}
      </div>
    </div>
  );
};

export default MovieList;
