import styles from "./MovieStructure.module.css"

function MovieStructure({children , movie}) {
    return <>
            <div className = {styles.moviePosterDiv}>
                <img src = {movie.Poster} className = {styles.moviePoster} />
            </div>
            <div className = {styles.movieDetails}>
                <h3>🖋 {movie.Title}</h3>
                <p className = {styles.movieText}>🎬 Type: {movie.Type}</p>
                <p className = {styles.movieText}>📆 Year: {movie.Year}</p>
            </div>
            {children}
        </>
}
export default MovieStructure;