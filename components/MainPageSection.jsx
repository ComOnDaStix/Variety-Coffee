import styles from "../styles/MainPageSection.module.css"
import Image from "next/image";

const MainPageSection = () => {
    return (  
        <div className={styles.wrapper}>
            <div className={styles.leftContainer}>
                <div className={styles.left}>
                    <div className={styles.textContainerOne}>
                        <p className={styles.p}>SUBSCRIPTION</p>
                        <h3 className={styles.h3}>Delicious, fresh coffee delivered when you need it. Never run out again with our subscription.</h3>
                        <button className={styles.button}>EXPLORE</button>
                    </div>
                    <div className={styles.imgContainer}>
                        <Image src={"/sectionImg2.webp"} className={styles.img} width={305} height={384}/>
                    </div>
                    <div className={styles.textContainerTwo}>
                    <p className={styles.p}>OUR LOCATIONS</p>
                        <h3 className={styles.h3}>We opened our doors on Graham avenue in 2008. Since then, we’ve built six locations in the NYC communities we call home.</h3>
                        <button className={styles.button}>EXPLORE</button>
                    </div>
                    <div className={styles.imgContainer}>
                        <Image className={styles.img} src={"/sectionImg4.webp"} width={305} height={384}/>
                    </div>
                </div>
            </div>
            <div className={styles.rightContainer}>
                <div className={styles.right}>
                    <div className={styles.imgContainer2}>
                    <Image src={"/sectionImg5.webp"} width={626} height={660} className={styles.img}/>
                    </div>
                    <div className={styles.imgContainer3}>
                    <Image src={"/sectionImg3.webp"} width={626} height={651} className={styles.img}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default MainPageSection;