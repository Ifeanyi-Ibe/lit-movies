const items = [];

export const initialState = {
	movies: items,
	count: items.length,
};

const movieReducer = (state, action) => {
	switch (action.type) {
		case "setMovies":
			return {
				movies: action.payload.movies,
			};
		default:
			return state;
	}
};

export default movieReducer;
