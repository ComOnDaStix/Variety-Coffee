import Image from "next/image";
import styles from "../styles/MainPageSectionTwo.module.css";

const MainPageSectionTwo = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <ul className={styles.imagesContainer}>
          <li className={styles.li}>
            <Image
              src={"/coffeepour.webp"}
              width={461}
              height={459}
              className={styles.img}
            />
          </li>
          <div className={styles.textContainer}>
            <p className={styles.p}>FRENCH PRESS</p>
            <h3 className={styles.h3}>
              Get Full-bodied coffee in 5<br /> minutes
            </h3>
            <button className={styles.button}>HOW TO BREW</button>
          </div>
        </ul>
        <ul className={styles.imagesContainer}>
          <li className={styles.li}>
            <Image
              src={"/coffeepourTwo.webp"}
              width={461}
              height={459}
              className={styles.img}
            />
          </li>
          <div className={styles.textContainer}>
            <p className={styles.p}>FRENCH PRESS</p>
            <h3 className={styles.h3}>
              Get Full-bodied coffee in 5<br /> minutes
            </h3>
            <button className={styles.button}>HOW TO BREW</button>
          </div>
        </ul>
        <ul className={styles.imagesContainer}>
          <li className={styles.li}>
            <Image
              src={"/coffeepourThree.webp"}
              width={461}
              height={459}
              className={styles.img}
            />
          </li>
          <div className={styles.textContainer}>
            <p className={styles.p}>FRENCH PRESS</p>
            <h3 className={styles.h3}>
              Get Full-bodied coffee in 5<br /> minutes
            </h3>
            <button className={styles.button}>HOW TO BREW</button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default MainPageSectionTwo;
