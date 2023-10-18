import { useContext } from "react";
import { ContextProvider } from "../src/App";
import styles from "./FavoriteMovie.module.css";
import Movie from "./Movie";
import Header from "./Header";

function FavoriteMovies() {
    const {favorites , dispatch} = useContext(ContextProvider);
    
    function deleteFavorite(movie) {
        dispatch({type : "deleteFavorite" , payload : movie.imdbID})
    }

    return <>
        <Header />
        {favorites.length === 0 ? <p className = {styles.noFavorites}>No Movies Add To Favorites ❌</p>
        :<div className = {styles.favoriteMovies}>
            {favorites ? favorites.map((movie) => <Movie movie = {movie} key = {movie.imdbID} >
                <button onClick = {() => deleteFavorite(movie)} className= {styles.btn}>X</button>
            </Movie>) : "error"}
        </div>
        }
    </>
}
export default FavoriteMovies;