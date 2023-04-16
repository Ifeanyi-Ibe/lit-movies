const MovieCard = ({ movie }) => {
	return (
		<>
			<section className="grid grid-cols-8 gap-2 rounded-lg shadow-lg bg-slate-300">
				<div className="col-span-3">
					<img
						src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
						alt={`${movie.title} poster`}
						style={{
							borderRadius: "15px 0 0 15px",
							minHeight: "100%",
						}}
					/>
				</div>
				<div className="col-span-5">
					<h3 className="text-2xl text-black pt-3">{movie.title}</h3>
					<p>
						<small className="text-black">
							RELEASE DATE:{" "}
							{movie.release_date !== ""
								? movie.release_date
								: "Not Available"}
						</small>
					</p>
					<p>
						<small>
							RATING:{" "}
							{movie.vote_average !== ""
								? movie.vote_average
								: "Not Available"}
						</small>
					</p>
					<p className="text-md pr-3">
						{movie.overview !== "" ? movie.overview : ""}{" "}
					</p>
				</div>
			</section>
		</>
	);
};

export default MovieCard;
