import styles from "../styles/FooterBanner.module.css";
import Image from "next/image";

const FooterBanner = () => {
    return (
      <div className={styles.wrapper}>
        <div className={styles.bannerContainer}>
          <Image src={"/footerBanner.webp"} width={1900} height={900} className={styles.img1} alt="footerBanner"/>
          <div className={styles.imgContainer}>
            <Image src={"/footerImg.webp"} width={359} height={469} className={styles.img}  alt="footerImg"/>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.button}>WHOLESALE INQUIRES</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default FooterBanner;