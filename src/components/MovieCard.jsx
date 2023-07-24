const MovieCard = ({ movie }) => {
  return (
    <>
      <section className="flex flex-col sm:grid sm:grid-cols-8 sm:gap-2 shadow-lg bg-slate-300">
        <div className="sm:col-span-3">
          <img
            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
            alt={`${movie.title} poster`}
            style={{
              minHeight: "100%",
              minWidth: "100%",
            }}
          />
        </div>
        <div className="sm:col-span-5 px-3">
          <h3 className="text-lg px-3 sm:text-2xl text-black pt-3">
            {movie.title}
          </h3>
          <p className="px-3">
            <small className="text-black">
              RELEASE DATE:{" "}
              {movie.release_date !== "" ? movie.release_date : "Not Available"}
            </small>
          </p>
          <p className="px-3">
            <small>
              RATING:{" "}
              {movie.vote_average !== "" ? movie.vote_average : "Not Available"}
            </small>
          </p>
          <p className="text-xs sm:text-md px-3 pb-8">
            {movie.overview !== "" ? movie.overview : ""}{" "}
          </p>
        </div>
      </section>
    </>
  );
};

export default MovieCard;
