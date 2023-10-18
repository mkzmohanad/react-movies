import { useContext } from "react";
import { ContextProvider } from "../src/App";
import styles from "./Search.module.css";

function Search() {
    const {searchValue , updateSearchValue , dispatch} = useContext(ContextProvider);

    function onChanging(value) {
        updateSearchValue(value);
        dispatch({type : "fetch"})
    }
    function stopSubmit(e) {
        e.preventDefault()
    }

    return <form onSubmit = {(e) => stopSubmit(e)}>
        <input className = {styles.searchBar} type="text" value = {searchValue} autoFocus  onChange={(e) => onChanging(e.target.value)} />
    </form>
}
export default Search;