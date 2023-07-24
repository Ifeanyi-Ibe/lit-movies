import { createContext, useReducer } from "react";
import reducer, { initialState } from "./reducer";
import {
  getLatestActionMovies,
  getMoviesByGenre,
  searchByTitle,
} from "../service/api";

export const Context = createContext();

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClick = async (genreId) => {
    try {
      const movies = await getMoviesByGenre(genreId);
      console.log(movies);
      dispatch({ type: "setMovies", payload: { movies } });
    } catch (error) {
      console.log(error);
    }
  };

  const getLatestMovies = async () => {
    try {
      const movies = await getLatestActionMovies();
      console.log(movies);
      dispatch({ type: "setMovies", payload: { movies } });
    } catch (error) {
      console.log(error);
    }
  };

  const getByGenre = async (genreId) => {
    try {
      const movies = await getMoviesByGenre(genreId);
      console.log(movies);
      dispatch({ type: "setMovies", payload: { movies } });
    } catch (error) {
      console.log(error);
    }
  };

  const getMovieByTitle = async (title) => {
    try {
      const movies = await searchByTitle(title);
      console.log(movies);
      dispatch({ type: "setMovies", payload: { movies } });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Context.Provider
      value={{
        state,
        dispatch,
        getLatestMovies,
        getByGenre,
        handleClick,
        getMovieByTitle,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
