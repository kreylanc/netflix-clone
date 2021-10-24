import React, { useEffect, useState } from "react";
import "./Banner.css";
import requests from "./Requests";
import axios from "./axios";
import { faPlay, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      className=" shadow bg-center md:bg-left-top bg-cover object-fill text-white"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className=" pt-44 h-48 px-6">
        <h1 className="text-3xl font-extrabold pb-3 md:text-5xl transition-all duration-300 ease-in">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="md:mt-2">
          <button className="banner__buttons bg-main mr-4  hover:bg-gray-200 hover:text-main">
            <FontAwesomeIcon icon={faPlay} className="mr-2" />
            WATCH
          </button>
          <button className="banner__buttons bg-gray450 hover:bg-gray-200 hover:text-gray-900 ">
            <FontAwesomeIcon icon={faPlus} className="mr-2" />
            ADD TO LIST
          </button>
        </div>

        <div className=" h-20 max-w-prose pt-4 text-sm xl:text-xl">
          {truncate(movie?.overview, 150)}
        </div>
      </div>

      <div className=" h-64 bg-gradient-to-b from-transparent via-gray450 to-black" />
    </header>
  );
}

export default Banner;
