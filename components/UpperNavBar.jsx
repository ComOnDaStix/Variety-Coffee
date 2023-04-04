import styles from "../styles/UpperNavBar.module.css";

const UpperNavBar = () => {
    return (  
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <p className={styles.p}>FREE SHIPPING ON ORDERS $50+</p>
            </div>
        </div>
    );
}
 
export default UpperNavBar;