import styles from "../styles/v60.module.css";
import Image from "next/image";

const V60 = () => {
    
    const stepImages = [
        "/step1.jpg",
        "/step2.jpg",
        "/step3.jpg",
        "/step4.jpg",
        "/step5.jpg",
        "/step6.jpg",
      ];

    return (
        <div className={styles.wrapper}>
          <div className={styles.section}>
            <div className={styles.textContainer}>
              <p className={styles.p}>BREW GUIDES</p>
              <h1 className={styles.h1}>V60</h1>
              <h3 className={styles.h3}>
                Serves: 1<br /> You’ll need 25g coffee (ground medium) and 400g water.
              </h3>
            </div>
            <div className={styles.imgContainer}>
              <Image src={"/brewimage.webp"} width={603} height={603} className={styles.img} />
            </div>
          </div>
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className={styles.section}>
              <div className={styles.textContainer}>
                <p className={styles.p}>Step {index + 1}</p>
                <h2 className={styles.h2}>Description for Step {index + 1}</h2>
              </div>
              <div className={styles.imgContainer}>
                <Image src={`/step${index + 1}.webp`} width={603} height={603} className={styles.img} />
              </div>
            </div>
          ))}
        </div>
      );
    };

export default V60;
