import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
	console.log(movies);
	return (
		<div>
			<form className="form">
				<label htmlFor="query" className="label">
					<span className="label--title">Search for a movie:</span>
				</label>
				<input
					type="text"
					name="query"
					placeholder="Enter movie title"
					// onChange={(e) => setQuery(e.target.value)}
				/>
				<button
					className="button bg-purple-800 rounded-md text-white px-8 text-sm py-3 mb-4"
					type="submit"
				>
					Go
				</button>
			</form>
			<div className="grid grid-cols-2 gap-4">
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
