import MainPageSection from "@/components/MainPageSection";
import styles from "../styles/MainPage.module.css";
import Link from "next/link";
import MainPageSectionTwo from "@/components/MainPageSectionTwo";
import FooterBanner from "@/components/FooterBanner";

const MainPage = () => {
  return (
    <>
    <div className={styles.wrapper}>
      <div className={styles.textContainer}>
        <p className={styles.p}>WE KEEP THINGS FRESH.</p>
        <h2 className={styles.h2}>
          Our coffees are a direct reflection of what’s in-season, so our menu
          changes frequently throughout the year. The fresher the crop, the
          better the coffee.
        </h2>
        <Link href="/" className={styles.link}><button className={styles.button}>OUR APPROACH</button></Link>
      </div>
    </div>
    <MainPageSection />
    <MainPageSectionTwo />
    <FooterBanner />
    </>
  );
};

export default MainPage;
