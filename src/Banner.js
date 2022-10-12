import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Banner.css";
import requests from "./Requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",

        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,

        // backgroundImage: `url("https://imgs.search.brave.com/qPluo_H8ASzEWHYSXnz0OJ1S9EF8N8-X9sXEYbv4e0I/rs:fit:960:270:1/g:ce/aHR0cHM6Ly93ZWJw/YWdlcy5zY3UuZWR1/L2Z0cC9scmxhbS9J/bWFnZXMvTmV0Zmxp/eF9iYW5uZXIuanBn")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      {/* It is trick add fade to bottom of div we use empty div */}
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
