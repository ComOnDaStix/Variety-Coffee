import styles from "../styles/Brewing.module.css";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const Brewing = () => {
    const [v60Hover, setV60Hover] = useState(false);
    const [chemexHover, setChemexHover] = useState(false);
    const [aeropressHover, setAeropressHover] = useState(false);

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.h1Container}>
                    <h1 className={styles.h1}>Brew Guides</h1>
                    <div className={styles.bb}></div>
                </div>
            </div>
            <div className={styles.imgWrapper}>
                <Link href="/v60" className={styles.link}>
                    <div className={styles.imgContainer}
                        onMouseEnter={() => setV60Hover(true)}
                        onMouseLeave={() => setV60Hover(false)}>
                        {v60Hover ? (
                            <video src={"/v60.mp4"} width={417} height={417} autoPlay loop muted className={styles.videoAutoPlay} />
                        ) : (
                            <Image src={"/v60NewImg.webp"} width={417} height={417} className={styles.img}  alt="V60 brewing method"/>
                        )}
                        <div className={styles.title}>
                            <p className={styles.p}>V60</p>
                        </div>
                    </div>
                </Link>
                <Link href="/chemex" className={styles.link}>
                    <div className={styles.imgContainer}
                        onMouseEnter={() => setChemexHover(true)}
                        onMouseLeave={() => setChemexHover(false)}>
                        {chemexHover ? (
                            <video src={"/chemex.mp4"} width={417} height={417} autoPlay loop muted className={styles.videoAutoPlay} />
                        ) : (
                            <Image src={"/chemex.webp"} width={417} height={417} className={styles.img}  alt="chemex brewing method" priority/>
                        )}
                        <div className={styles.title}>
                            <p className={styles.p}>CHEMEX</p>
                        </div>
                    </div>
                </Link>
                <Link href="/Aeropress" className={styles.link}>
                    <div className={styles.imgContainer}
                        onMouseEnter={() => setAeropressHover(true)}
                        onMouseLeave={() => setAeropressHover(false)}>
                        {aeropressHover ? (
                            <video src={"/aeropress.mp4"} width={417} height={417} autoPlay loop muted className={styles.videoAutoPlay} />
                        ) : (
                            <Image src={"/aeropress.webp"} width={417} height={417} className={styles.img}  alt="Aeropress brewing method"/>
                        )}
                        <div className={styles.title}>
                            <p className={styles.p}>AEROPRESS</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Brewing;