import styles from "./MovieDetails.module.css";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import Header from "./Header";
import { ContextProvider } from "../src/App";
import Favorite from "./Favorite";
import MovieDetailsStructure from "./MovieDetailsStructure";

function MovieDetails() {
    const movieId = useParams();
    const [selectedMovie , setSelectedMovie] = useState({});
    const {dispatch , allIds} = useContext(ContextProvider)

    useEffect(() => {
        async function fetchData() {
            const data = await fetch(`http://www.omdbapi.com/?apikey=de3084b7&&i=${movieId.id}`);
            const finalData = await data.json();
            setSelectedMovie(finalData);
        }
        fetchData();
    },[movieId])

    function addFavoriteMovie() {
        if (!allIds.includes(movieId.id)){
            dispatch({type : "addToFavorites" , payload : {imdbID : selectedMovie.imdbID , Poster : selectedMovie.Poster ,
                Title : selectedMovie.Title , Type : selectedMovie.Type , Year : selectedMovie.Year}})
        }
    }
    
    return <div className = {styles.detailsPage}>
        {selectedMovie ? <>
        <Header>
            <Favorite />
        </Header>
        <MovieDetailsStructure selectedMovie = {selectedMovie} addFavoriteMovie = {addFavoriteMovie} movieId = {movieId}/>
        </>
        : <Loading />
    }
    </div>
}
export default MovieDetails;
// http://www.omdbapi.com/?apikey=de3084b7&&i=tt1186367