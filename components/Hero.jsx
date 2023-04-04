import Link from "next/link";
import styles from "../styles/Hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <div className={styles.sliderContainer}>
      <ul className={`${styles.imgContainer} ${styles.slider}`}>
        <li className={styles.li}>
          <Image
            src={"/heroImg.webp"}
            width={474}
            height={552}
            className={styles.img}
          />
        </li>
        <li className={styles.li}>
          <Image
            src={"/heroImg2.webp"}
            width={474}
            height={552}
            className={styles.img}
          />
        </li>
        <Link href="/">
          <button className={styles.button}>SHOP ALL</button>
        </Link>
        <li className={styles.li}>
          <Image
            src={"/heroImg3.webp"}
            width={474}
            height={552}
            className={styles.img}
          />
        </li>
      </ul>
    </div>
  );
};

export default Hero;
