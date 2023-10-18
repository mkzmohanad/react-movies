import Favorite from "./Favorite";
import Header from "./Header";
import styles from "./Loading.module.css";
import Search from "./Search";

function Loading() {
    return<>
    <Header>
        <Search />
        <Favorite />
    </Header>
    <h1 className={styles.loading}>Loading....</h1>
    </>
}
export default Loading;