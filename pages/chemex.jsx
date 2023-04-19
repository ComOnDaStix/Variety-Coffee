import styles from "../styles/v60.module.css";
import Image from "next/image";

const Chemex = () => {
    return (  
        <div className={styles.wrapper}>
        <div className={styles.section}>
          <div className={styles.textContainer}>
            <p className={styles.p}>BREW GUIDES</p>
            <h1 className={styles.h1}>Chemex</h1>
            <h3 className={styles.h3}>
              Serves: 2<br /> You’ll need 45g coffee (ground medium coarse) and 720g water. 
            </h3>
          </div>
          <div className={styles.imgContainer}>
            <Image src={"/chemex.webp"} width={603} height={603} className={styles.img} />
          </div>
        </div>
  
        <div className={styles.section}>
          <div className={styles.textContainer}>
            <p className={styles.p}>STEP ONE</p>
            <h2 className={styles.h2}>Add 45g of coffee ground medium coarse.</h2>
          </div>
          <div className={styles.imgContainer}>
          <video src={"/chemexvid.mp4"} width={603} height={603} autoPlay loop muted className={styles.videoAutoPlay} />
          </div>
        </div>
  
        <div className={styles.section}>
          <div className={styles.textContainer}>
            <p className={styles.p}>STEP TWO</p>
            <h2 className={styles.h2}>Start timer, and pour 90g of water in concentric circles.</h2>
          </div>
          <div className={styles.imgContainer}>
          <video src={"/chemexvid2.mp4"} width={603} height={603} autoPlay loop muted className={styles.videoAutoPlay} />
          </div>
        </div>
  
        <div className={styles.section}>
          <div className={styles.textContainer}>
            <p className={styles.p}>STEP THREE</p>
            <h2 className={styles.h2}>At 45 seconds, pour up to 250g water in a concentric circles, and swirl or stir the slurry.</h2>
          </div>
          <div className={styles.imgContainer}>
          <video src={"/chemexvid3.mp4"} width={603} height={603} autoPlay loop muted className={styles.videoAutoPlay} />
          </div>
        </div>
  
        <div className={styles.section}>
          <div className={styles.textContainer}>
            <p className={styles.p}>STEP FOUR</p>
            <h2 className={styles.h2}>At 1:15, pour up to 425g water in concentric circles.</h2>
          </div>
          <div className={styles.imgContainer}>
          <video src={"/chemexvid5.mp4"} width={603} height={603} autoPlay loop muted className={styles.videoAutoPlay} />
          </div>
        </div>
  
        <div className={styles.section}>
          <div className={styles.textContainer}>
            <p className={styles.p}>STEP FIVE</p>
            <h2 className={styles.h2}>At 1:45, pour up to 720g water in concentric circles.</h2>
          </div>
          <div className={styles.imgContainer}>
          <video src={"/chemexvid6.mp4"} width={603} height={603} autoPlay loop muted className={styles.videoAutoPlay} />
          </div>
        </div>
  
        <div className={styles.section}>
          <div className={styles.textContainer}>
            <p className={styles.p}>STEP SIX</p>
            <h2 className={styles.h2}>Let drain (~5 minutes) and serve.</h2>
          </div>
          <div className={styles.imgContainer}>
          <video src={"/chemexvid7.mp4"} width={603} height={603} autoPlay loop muted className={styles.videoAutoPlay} />
          </div>
        </div>
        </div>
        )
      };
    

 
export default Chemex;