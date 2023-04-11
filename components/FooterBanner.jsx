import styles from "../styles/FooterBanner.module.css";
import Image from "next/image";

const FooterBanner = () => {
    return (
      <div className={styles.wrapper}>
        <div className={styles.bannerContainer}>
          <Image src={"/footerBanner.webp"} width={1900} height={900} />
          <div className={styles.imgContainer}>
            <Image src={"/footerBanner2.webp"} width={359} height={469} className={styles.img}/>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.button}>WHOLESALE INQUIRES</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default FooterBanner;