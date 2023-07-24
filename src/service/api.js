import axios from "axios";
import { getOneMonthDateRange } from "../util/dateProcessor";

const baseUrl = process.env.REACT_APP_MOVIEDB_BASE_URL;
const apiKey = process.env.REACT_APP_MOVIEDB_API_KEY;

export const getLatestActionMovies = async () => {
  const date = getOneMonthDateRange();
  const items = await axios.get(
    `${baseUrl}/discover/movie?api_key=${apiKey}&language=en-US&primary_release_date.gte=${date[1]}&primary_release_date.lte=${date[0]}&page=1&include_adult=false&with_genres=28`
  );
  console.log(items);
  return items.data.results;
};

export const getMoviesByGenre = async (genreId) => {
  const items = await axios.get(
    `${baseUrl}/discover/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false&with_genres=${genreId}`
  );
  return items.data.results;
};

export const searchByTitle = async (title) => {
  const items = await axios.get(
    `${baseUrl}/search/movie?query=${title}&api_key=${apiKey}&language=en-US&page=1&include_adult=false`
  );
  return items.data.results;
};
