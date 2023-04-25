import styles from "../styles/v60.module.css";
import Image from "next/image";

const V60 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.section}>
        <div className={styles.textContainer}>
          <p className={styles.p}>BREW GUIDES</p>
          <h1 className={styles.h1}>V60</h1>
          <h3 className={styles.h3}>
            Serves: 1<br /> You’ll need 25g coffee (ground medium) and 400g
            water.
          </h3>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src={"/wow.webp"}
            width={603}
            height={603}
            className={styles.img}
            priority
            alt="wow"
          />
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.textContainer}>
          <p className={styles.p}>STEP ONE</p>
          <h2 className={styles.h2}>
            Rinse filter with hot water. (Discard water and replace.)
          </h2>
        </div>
        <div className={styles.imgContainer}>
          <video
            src={"/v60vid.mp4"}
            width={603}
            height={603}
            autoPlay
            loop
            muted
            className={styles.videoAutoPlay}
          />
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.textContainer}>
          <p className={styles.p}>STEP TWO</p>
          <h2 className={styles.h2}>
            Add 25g coffee (medium grind) to the filter and shake to level the
            bed.
          </h2>
        </div>
        <div className={styles.imgContainer}>
          <video
            src={"/v60vid2.mp4"}
            width={603}
            height={603}
            autoPlay
            loop
            muted
            className={styles.videoAutoPlay}
          />
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.textContainer}>
          <p className={styles.p}>STEP THREE</p>
          <h2 className={styles.h2}>
            Pour 50g of water over the coffee, ensuring all grounds are
            saturated. Let bloom for 30-45 seconds.
          </h2>
        </div>
        <div className={styles.imgContainer}>
          <video
            src={"/v60vid3.mp4"}
            width={603}
            height={603}
            autoPlay
            loop
            muted
            className={styles.videoAutoPlay}
          />
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.textContainer}>
          <p className={styles.p}>STEP FOUR</p>
          <h2 className={styles.h2}>
            Slowly pour an additional 150g of water, using a spiral motion, for
            1 minute.
          </h2>
        </div>
        <div className={styles.imgContainer}>
          <video
            src={"/v60vid4.mp4"}
            width={603}
            height={603}
            autoPlay
            loop
            muted
            className={styles.videoAutoPlay}
          />
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.textContainer}>
          <p className={styles.p}>STEP FIVE</p>
          <h2 className={styles.h2}>
            Pour the remaining 200g of water, again using a spiral motion, for
            another 1 minute.
          </h2>
        </div>
        <div className={styles.imgContainer}>
          <video
            src={"/v60vid5.mp4"}
            width={603}
            height={603}
            autoPlay
            loop
            muted
            className={styles.videoAutoPlay}
          />
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.textContainer}>
          <p className={styles.p}>STEP SIX</p>
          <h2 className={styles.h2}>
            Pour the remaining 200g of water, again using a spiral motion, for
            another 1 minute.
          </h2>
        </div>
        <div className={styles.imgContainer}>
          <video
            src={"/v60vid6.mp4"}
            width={603}
            height={603}
            autoPlay
            loop
            muted
            className={styles.videoAutoPlay}
          />
        </div>
      </div>
    </div>
  );
};

export default V60;
