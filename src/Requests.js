const API_KEY = "b7a4ccd496db29f548ff030b1746fc4b";

const requests = {
  fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&first_air_date.gte=2000-01-01`,
  fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchPopularMovies: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`,
  fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
  fetchMarvelMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=primary_release_date.desc&page=1&with_companies=420|19551|38679|2301|13252`,
  fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
  fetchDocumentaries: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`,
};

export default requests;
