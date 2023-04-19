import styles from "../styles/v60.module.css";
import Image from "next/image";

const Aeropress = () => {
    return (  
        <div className={styles.wrapper}>
        <div className={styles.section}>
          <div className={styles.textContainer}>
            <p className={styles.p}>BREW GUIDES</p>
            <h1 className={styles.h1}>Aeropress</h1>
            <h3 className={styles.h3}>
              Serves: 1<br /> You’ll need 45g coffee (ground medium coarse) and 720g water. 
            </h3>
          </div>
          <div className={styles.imgContainer}>
            <Image src={"/chemex.webp"} width={603} height={603} className={styles.img} />
          </div>
        </div>
  
        <div className={styles.section}>
          <div className={styles.textContainer}>
            <p className={styles.p}>STEP ONE</p>
            <h2 className={styles.h2}>Place filter in basket and affix to brew shaft, place brewer basket-side down onto a cup.</h2>
          </div>
          <div className={styles.imgContainer}>
          <video src={"/aerovid.mp4"} width={603} height={603} autoPlay loop muted className={styles.videoAutoPlay} />
          </div>
        </div>
  
        <div className={styles.section}>
          <div className={styles.textContainer}>
            <p className={styles.p}>STEP TWO</p>
            <h2 className={styles.h2}>Add 14g coffee, ground medium fine.</h2>
          </div>
          <div className={styles.imgContainer}>
          <video src={"/aerovid2.mp4"} width={603} height={603} autoPlay loop muted className={styles.videoAutoPlay} />
          </div>
        </div>
  
        <div className={styles.section}>
          <div className={styles.textContainer}>
            <p className={styles.p}>STEP THREE</p>
            <h2 className={styles.h2}>Start timer, and add 30g of water to grinds.</h2>
          </div>
          <div className={styles.imgContainer}>
          <video src={"/aerovid3.mp4"} width={603} height={603} autoPlay loop muted className={styles.videoAutoPlay} />
          </div>
        </div>
  
        <div className={styles.section}>
          <div className={styles.textContainer}>
            <p className={styles.p}>STEP FOUR</p>
            <h2 className={styles.h2}>At 15 seconds, add 200g water to brewer and place plunger inside the top, creating a vacuum seal.</h2>
          </div>
          <div className={styles.imgContainer}>
          <video src={"/aerovid4.mp4"} width={603} height={603} autoPlay loop muted className={styles.videoAutoPlay} />
          </div>
        </div>
  
        <div className={styles.section}>
          <div className={styles.textContainer}>
            <p className={styles.p}>STEP FIVE</p>
            <h2 className={styles.h2}>At 1:15, remove plunger and stir the coffee.</h2>
          </div>
          <div className={styles.imgContainer}>
          <video src={"/aerovid5.mp4"} width={603} height={603} autoPlay loop muted className={styles.videoAutoPlay} />
          </div>
        </div>
  
        <div className={styles.section}>
          <div className={styles.textContainer}>
            <p className={styles.p}>STEP SIX</p>
            <h2 className={styles.h2}>Replace the plunger and press down slowly, until you hear a hissing sound.</h2>
          </div>
          <div className={styles.imgContainer}>
          <video src={"/aerovid6.mp4"} width={603} height={603} autoPlay loop muted className={styles.videoAutoPlay} />
        </div>
        </div>
        <div className={styles.section}>
          <div className={styles.textContainer}>
            <p className={styles.p}>STEP SEVEN</p>
            <h2 className={styles.h2}>Remove and clean brewer, serve coffee.</h2>
          </div>
          <div className={styles.imgContainer}>
          <video src={"/aerovid7.mp4"} width={603} height={603} autoPlay loop muted className={styles.videoAutoPlay} />
          </div>
        </div>
        </div>
        )
      };
    
 
export default Aeropress;