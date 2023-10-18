import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useContext } from "react";
import { ContextProvider } from "../src/App";

function Header({children}) {
    const {dispatch} = useContext(ContextProvider);

    function backToStart() {
        dispatch({type : "start"})
    }

    return <header className = {styles.header}>
        <Link onClick={() => backToStart()} className={styles.headerLink} to = "/">Movie React</Link>
        {children}
    </header>;
}
export default Header;