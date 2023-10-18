import styles from "./Error.module.css";
import Header from "./Header";

function Error() {
    return <>
        <Header />
        <div className = {styles.error}>
            <h1>An error has occurred 🚫❌</h1>
        </div>
    </>
}
export default Error;