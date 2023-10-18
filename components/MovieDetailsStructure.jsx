import { useContext } from "react";
import styles from "./MovieDetailsStructure.module.css";
import { ContextProvider } from "../src/App";

function MovieDetailsStructure({selectedMovie , addFavoriteMovie , movieId}) {
    const {allIds} = useContext(ContextProvider);

    return  <div className = {styles.details}>
        <div className = {styles.poster}>
            <img src = {selectedMovie.Poster}/>
        </div>
        <div className = {styles.info}>
            <div className = {styles.heading}>
                <h1>{selectedMovie.Title}</h1>
                <span className = {styles.rating}>{selectedMovie.imdbRating}⭐</span>
            </div>
            <div className = {styles.plot}>
                <p>{selectedMovie.Plot}</p>
            </div>
            <div>
                <div className = {styles.smallDetails}>
                    <p>Release Date:</p>
                    <p>📆 {selectedMovie.Year}</p>
                </div>
                <div className = {styles.smallDetails}>
                    <p>Created By:</p>
                    <p>🖊 {selectedMovie.Writer}</p>
                </div>
                <div className = {styles.smallDetails}>
                    <p>Genre:</p>
                    <p>🎭 {selectedMovie.Genre}</p>
                </div>
                <div className = {styles.smallDetails}>
                    <p>Runtime:</p>
                    <p>⏱ {selectedMovie.Runtime}</p>
                </div>
            </div>
            <button onClick={() => addFavoriteMovie()}
            className = {`${styles.btn} ${allIds.includes(movieId.id) ? styles.notAllowed : ""}`}>Add To Favorites</button>
        </div>
    </div>
}
export default MovieDetailsStructure;