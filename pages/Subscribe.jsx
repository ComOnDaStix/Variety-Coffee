import styles from "../styles/Subscribe.module.css"
import Link from "next/link";

const Subscribe = () => {
    return (  
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.textContainer}>
                    <p className={styles.p}>SUBSCRIBE</p>
                    <h2 className={styles.h2}>Fresh coffee is the key to brewing a great cup at home.</h2>
                    <h2 className={styles.h22}>Answer a few questions below to find out what's the right subscription for you!</h2>
                    <Link href={"/"}>
                    <button className={styles.button}>LET'S GO</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
 
export default Subscribe;