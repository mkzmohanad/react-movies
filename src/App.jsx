import { createContext, useEffect, useReducer } from "react";
import { useState } from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Start from "../components/Start";
import MoviesArea from "../components/MoviesArea";
import Loading from "../components/Loading";
import MovieDetails from "../components/MovieDetails";
import FavoriteMovie from "../components/FavoriteMovie";
import Error from "../components/Error";

// http://www.omdbapi.com/?apikey=de3084b7&s=interstellar

export const ContextProvider = createContext()
const initial = {
  statues : "start",
  movies : [],
  selectedMovie : null,
  favorites : [],
}
function reducer(state , action) {
    switch (action.type) {
      case "start":
        return {...state , statues : "start"}
      case "fetch":
        return {...state , statues : "fetch"}
      case "loading":
        return {...state , statues : "loading"}
      case "ready":
        return {...state , statues : "ready" , movies : action.payload};
      case "addToFavorites" :
        return {...state , favorites : [...state.favorites , action.payload]};
      case "deleteFavorite":{
        const favoritesAfterDelete = state.favorites.filter((movie) => movie.imdbID !== action.payload )
        return {...state , favorites : favoritesAfterDelete}
      }
      case "error":
        return {...state , statues : "error"}
      default : 
        return
    }
}

function App() {
    const [{statues , movies , favorites } , dispatch] = useReducer(reducer , initial)
    const [searchValue , setSearchValue] =useState("");

    const allIds = favorites.map((favoritesMovies) => favoritesMovies.imdbID);

    useEffect(() => {
      async function fetching() {
        try {
          dispatch({type : "loading"})
          const data = await fetch(`http://www.omdbapi.com/?apikey=de3084b7&s=${searchValue}`);
          const finalData = await data.json();
          if(finalData.Response) dispatch({type : "ready" , payload : finalData.Search});
          
        }
        catch(error) {
          dispatch({type : "error"})
        }
      }
      if  (statues === "fetch") fetching();
    },[searchValue , statues])

    function updateSearchValue(newSearchValue) {
        setSearchValue(newSearchValue);
    }

    return <>
    <ContextProvider.Provider value = {{searchValue , updateSearchValue , dispatch , movies , favorites , allIds }}>
      <BrowserRouter>
        {statues === "start" && <Start />}
        {statues === "loading" && <Loading />}
        {statues === "error" && <Error />}
        {statues === "ready" && 
          <Routes>
            <Route path = "/" element = {<Start />}/>
            <Route path = "/MoviesArea" element = {<MoviesArea />}/>
            <Route path = "/MoviesArea/:id" element = {<MovieDetails />}/>
            <Route path = "/FavoriteMovie" element = {<FavoriteMovie />}/>
            <Route path = "*" element = {<Error />}/>
          </Routes>
        }
      </BrowserRouter>
    </ContextProvider.Provider>
    </>
}
export default App;