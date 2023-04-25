import Image from "next/image";
import styles from "../styles/MainPageSectionTwo.module.css";
import Link from "next/link";

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
              alt="coffeepour"
            />
          </li>
          <div className={styles.textContainer}>
            <p className={styles.p}>FRENCH PRESS</p>
            <h3 className={styles.h3}>
              Get Full-bodied coffee in 5<br /> minutes
            </h3>
            <Link href={"/v60"}>
            <button className={styles.button}>HOW TO BREW</button>
            </Link>
          </div>
        </ul>
        <ul className={styles.imagesContainer}>
          <li className={styles.li}>
            <Image
              src={"/coffeePour2.webp"}
              width={461}
              height={459}
              className={styles.img}
              alt="coffeePour2"
            />
          </li>
          <div className={styles.textContainer}>
            <p className={styles.p}>FRENCH PRESS</p>
            <h3 className={styles.h3}>
              Get Full-bodied coffee in 5<br /> minutes
            </h3>
            <Link href={"/chemex"}>
            <button className={styles.button}>HOW TO BREW</button>
            </Link>
          </div>
        </ul>
        <ul className={styles.imagesContainer}>
          <li className={styles.li}>
            <Image
              src={"/coffeePour3.webp"}
              width={461}
              height={459}
              className={styles.img}
              alt="coffeePour3"
            />
          </li>
          <div className={styles.textContainer}>
            <p className={styles.p}>FRENCH PRESS</p>
            <h3 className={styles.h3}>
              Get Full-bodied coffee in 5<br /> minutes
            </h3>
            <Link href={"/Brewing"}>
            <button className={styles.button}>HOW TO BREW</button>
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default MainPageSectionTwo;