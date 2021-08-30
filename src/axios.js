import axios from "axios";

//creating the baseURL to not copy paste the url of the website over and over while fetching data
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
