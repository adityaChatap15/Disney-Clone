import axios from "axios";
const movieBaseUrl="https://api.themoviedb.org/3"
const api_key='e4af063c7bd6b24209e23cafe435cc40'

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=e4af063c7bd6b24209e23cafe435cc40';

const getTrendingVideos = axios.get(movieBaseUrl+
    "/trending/all/day?api_key="+api_key);

const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default{
    getTrendingVideos,
    getMovieByGenreId
}