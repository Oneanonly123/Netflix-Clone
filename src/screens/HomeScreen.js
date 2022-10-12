import React from "react";
import Banner from "../Banner";
import "./HomeScreen.css";
import Nav from "../Nav";
import requests from "../Requests";
import Row from "../Row";
function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />

      <Banner />

      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} />
      <Row title="POPULAR MOVIES" fetchUrl={requests.fetchPopularMovies} />
      <Row title="MARVEL MOVIES" fetchUrl={requests.fetchMarvelMovies} />
      <Row title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries} />
      <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
    </div>
  );
}

export default HomeScreen;
