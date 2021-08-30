import React, { useEffect, useState } from "react";
import "./Banner.css";
import requests from "./Requests";
import axios from "./axios";

function Banner() {
  /**
   * truncate function used for cutting words if its too long and add '...' at the end of the string
   * takes two parameter a string and a number to define the max number of character in the string
   * if string length passes the specified number cut the text after it and concatenate with "..."
   * else just return the string itself
   */

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  //Store the movie name/set the movie for the banner title
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
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

  return (
    /**
     * To display the banner image and movie title
     * TODO: Fetch data from API and use those values for image and titles
     */
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button watch">WATCH</button>
          <button className="banner__button">ADD TO LIST</button>
        </div>

        <div className="banner__description">
          {truncate(movie?.overview, 150)}
        </div>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
