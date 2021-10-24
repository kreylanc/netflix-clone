import React, { useEffect, useState } from "react";
import axios from "./axios";
// import "./Row.css";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import LazyLoad from "react-lazyload";

function Row({ title, fetchURL, isLargeRow = false }) {
  const [movies, setMovie] = useState([]);

  const baseURL = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovie(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchURL]);

  return (
    <div className="flex flex-col ml-5 pb-4 text-lg text-gray-100 font-bold">
      <h2 className="tracking-wide flex">{title}</h2>
      <div className="flex p-5 overflow-x-scroll no-scrollbar">
        <div className="flex flex-nowrap min-w-max">
          {movies.map(
            (movie) =>
              ((isLargeRow && movie.poster_path) ||
                (!isLargeRow && movie.backdrop_path)) && (
                <LazyLoad height={200} offset={100} once={true}>
                  <img
                    className={` max-h-24 mr-3 object-contain overflow-hidden transform hover:scale-105 transition-transform duration-500 rounded  border-b-2 border-main ${
                      isLargeRow &&
                      " max-h-48 md:max-h-64 transform hover:scale-90 "
                    }`}
                    key={movie.id}
                    src={`${baseURL}${
                      isLargeRow ? movie.poster_path : movie.backdrop_path
                    }`}
                    alt={movie.name}
                  />
                </LazyLoad>
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default Row;
