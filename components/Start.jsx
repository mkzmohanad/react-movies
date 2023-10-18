import { Link } from "react-router-dom";
import styles from "./Start.module.css";
import { ContextProvider } from "../src/App";
import { useContext } from "react";

function Start() {
    const {dispatch , updateSearchValue} = useContext(ContextProvider);

    function dispatching() {
        dispatch({type : "ready"});
        updateSearchValue("")
    }
    
    return <div className={styles.startPage}>
        <h1>Start exploring Movies</h1>
        <Link onClick = {() => dispatching()} className = {styles.link} to="/MoviesArea">Explore Now</Link>
    </div>
}
export default Start;