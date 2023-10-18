import { useContext } from "react";
import { ContextProvider } from "../src/App";
import styles from "./Favorite.module.css";
import { Link } from "react-router-dom";

function Favorite() {
    const {favorites} = useContext(ContextProvider);
    
    return <Link to = "/FavoriteMovie" className = {styles.favorite}>
        Favorites : {favorites ? favorites.length : 0}
    </Link>
}
export default Favorite;