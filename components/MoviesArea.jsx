import { useContext } from "react";
import { ContextProvider } from "../src/App";
import Header from "./Header";
import Movie from "./Movie";
import styles from "./MoviesArea.module.css";
import Search from "./Search";
import Favorite from "./Favorite";

function MovieArea() {
    const {movies} = useContext(ContextProvider);

    return  <>
        <Header>
            <Search />
            <Favorite />
        </Header>
        <div className = {styles.allMovies}>
            {movies && movies.map((movie) => <Movie movie = {movie} key = {movie.imdbID} />)}
        </div>
    </> 
}
export default MovieArea;