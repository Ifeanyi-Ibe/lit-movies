import { useEffect, useContext } from "react";
import MovieList from "./components/MovieList";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { TbMovie } from "react-icons/tb";
import { GiWildfires } from "react-icons/gi";
import { wildFires, movieStyle } from "./util/logoStyles";

import { Context } from "./store/context";

function App() {
	const { state, getLatestMovies } = useContext(Context);
	const { movies } = state;

	useEffect(() => {
		getLatestMovies();
	}, []);

	return (
		<>
			<section className="flex pt-2 space-x-2 shadow-md px-6 h-14 fixed top-0 right-0 left-0">
				<div className="flex space-x-0">
					<TbMovie style={movieStyle} />
					<GiWildfires style={wildFires} />
				</div>
				<h1 className="text-2xl logo">Lit Movies</h1>
			</section>
			<main className="grid grid-cols-8 gap-1 mx-12 mt-20">
				<section>
					<Sidebar />
				</section>
				<section className="col-span-7">
					{movies && <MovieList movies={movies} />}
				</section>
			</main>
			<Footer />
		</>
	);
}

export default App;
