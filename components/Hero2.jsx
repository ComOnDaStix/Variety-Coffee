import Image from "next/image";
import styles from "../styles/Hero2.module.css";

const Hero2 = () => {
  return (
    <div className={styles.wrapper}>
      <Image
        src="/heroimg4.webp"
        layout="responsive"
        width={1900}
        height={420}
        objectFit="cover"
        className={styles.img}
        alt="heroimg4"
      />
    </div>
  );
};

export default Hero2;