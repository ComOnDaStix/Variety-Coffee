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
    className={`${styles.img} ${styles.smallImage}`}
    alt="heroImg"
    priority
  />
</li>
<li className={styles.li}>
  <Image
    src={"/heroImg2.webp"}
    width={474}
    height={552}
    className={`${styles.img} ${styles.smallImage}`}
    alt="heroImg2"
    priority
  />
</li>
<li className={styles.li}>
  <Image
    src={"/heroImg3.webp"}
    width={474}
    height={552}
    className={`${styles.img} ${styles.smallImage}`}
    alt="heroImg3"
    priority
  />
</li>
      </ul>
      <Link href="/">
        <button className={styles.button}>SHOP ALL</button>
      </Link>
    </div>
  );
};

export default Hero;