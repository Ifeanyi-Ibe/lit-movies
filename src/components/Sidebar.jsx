import { useContext } from "react";
import genres from "../util/genres";
import { Context } from "../store/context";

const Sidebar = () => {
	const { handleClick } = useContext(Context);

	return (
		<>
			<section className="flex flex-col space-y-2 fixed">
				<h1>Genres</h1>
				<h2
					className="text-sm text-blue-800 ml-0 active:bg-green-500 active:py-1 active:px-3"
					style={{ cursor: "pointer" }}
					onClick={() => handleClick(genres.action)}
				>
					Action
				</h2>
				<h2
					className="text-sm text-blue-800"
					style={{ cursor: "pointer" }}
					onClick={() => handleClick(genres.adventure)}
				>
					Adventure
				</h2>
				<h2
					className="text-sm text-blue-800"
					style={{ cursor: "pointer" }}
					onClick={() => handleClick(genres.animation)}
				>
					Animation
				</h2>
				<h2
					className="text-sm text-blue-800"
					style={{ cursor: "pointer" }}
					onClick={() => handleClick(genres.comedy)}
				>
					Comedy
				</h2>
				<h2
					className="text-sm text-blue-800"
					style={{ cursor: "pointer" }}
					onClick={() => handleClick(genres.crime)}
				>
					Crime
				</h2>
				<h2
					className="text-sm text-blue-800"
					style={{ cursor: "pointer" }}
					onClick={() => handleClick(genres.documentary)}
				>
					Documentary
				</h2>
				<h2
					className="text-sm text-blue-800"
					style={{ cursor: "pointer" }}
					onClick={() => handleClick(genres.drama)}
				>
					Drama
				</h2>
				<h2
					className="text-sm text-blue-800"
					style={{ cursor: "pointer" }}
					onClick={() => handleClick(genres.family)}
				>
					Family
				</h2>
				<h2
					className="text-sm text-blue-800"
					style={{ cursor: "pointer" }}
					onClick={() => handleClick(genres.fantasy)}
				>
					Fantasy
				</h2>
				<h2
					className="text-sm text-blue-800"
					style={{ cursor: "pointer" }}
					onClick={() => handleClick(genres.history)}
				>
					History
				</h2>
				<h2
					className="text-sm text-blue-800"
					style={{ cursor: "pointer" }}
					onClick={() => handleClick(genres.horror)}
				>
					Horror
				</h2>
				<h2
					className="text-sm text-blue-800"
					style={{ cursor: "pointer" }}
					onClick={() => handleClick(genres.music)}
				>
					Music
				</h2>
				<h2
					className="text-sm text-blue-800"
					style={{ cursor: "pointer" }}
					onClick={() => handleClick(genres.mystery)}
				>
					Mystery
				</h2>
				<h2
					className="text-sm text-blue-800"
					style={{ cursor: "pointer" }}
					onClick={() => handleClick(genres.romance)}
				>
					Romance
				</h2>
				<h2
					className="text-sm text-blue-800"
					style={{ cursor: "pointer" }}
					onClick={() => handleClick(genres.science_fiction)}
				>
					Science Fiction
				</h2>
				<h2
					className="text-sm text-blue-800"
					style={{ cursor: "pointer" }}
					onClick={() => handleClick(genres.tv_movie)}
				>
					TV Movie
				</h2>
				<h2
					className="text-sm text-blue-800"
					style={{ cursor: "pointer" }}
					onClick={() => handleClick(genres.thriller)}
				>
					Thriller
				</h2>
				<h2
					className="text-sm text-blue-800"
					style={{ cursor: "pointer" }}
					onClick={() => handleClick(genres.war)}
				>
					War
				</h2>
				<h2
					className="text-sm text-blue-800"
					style={{ cursor: "pointer" }}
					onClick={() => handleClick(genres.western)}
				>
					Western
				</h2>
			</section>
		</>
	);
};

export default Sidebar;
