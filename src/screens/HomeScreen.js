import React from "react";
import Banner from "../Banner";
import "./HomeScreen.css";
import Nav from "../Nav";
import Row from "../Row";
import requests from "../Requests";

function HomeScreen() {
  return (
    <div className="homeScreen">
      {/* Call the Navbar component */}
      <Nav />

      {/* Call the Banner component here*/}
      <Banner />

      {/* Call the Row (movie list) component  */}
      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />

      {/* <Row title="LATEST" fetchURL={requests.fetchLatest} isLargeRow /> */}

      <Row title="TRENDING" fetchURL={requests.fetchTrending} isLargeRow />
      <Row title="TOP RATED" fetchURL={requests.fetchTopRated} />
      <Row title="ACTION" fetchURL={requests.fetchActionMovies} />
      <Row title="ROMANCE" fetchURL={requests.fetchRomanceMovies} />
      <Row title="COMEDY" fetchURL={requests.fetchComedyMovies} />
      <Row title="HORROR" fetchURL={requests.fetchHorrorMovies} />
      <Row title="DOCUMENTARY" fetchURL={requests.fetchDocumentaries} />
    </div>
  );
}

export default HomeScreen;
