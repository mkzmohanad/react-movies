import { Link } from "react-router-dom";
import styles from "./Movie.module.css";
import MovieStructure from "./MovieStructure";

function Movie({children , movie}) {
    return <div className = {styles.movieBox}>
        <Link to={`/MoviesArea/${movie.imdbID}`} className = {styles.movie}>
            <MovieStructure movie={movie} />
        </Link>
        {children}
    </div>
}

export default Movie;
// http://www.omdbapi.com/?apikey=de3084b7&&i=tt27302088