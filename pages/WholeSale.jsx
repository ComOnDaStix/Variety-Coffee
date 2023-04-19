import styles from "../styles/WholeSale.module.css";
import Image from "next/image";

const WholeSale = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image src={"/wholesale.jpg"} width={606.5} height={606.5} className={styles.img}/>
        </div>
      </div>
      <div className={styles.textContainer}>
        <p className={styles.p}>WHOLESALE</p>
        <div className={styles.bb}></div>
        <h2 className={styles.h2}>
          The considerable task of sourcing and roasting exceptional coffee can
          be hair-raising and daunting, but we do it with smiles and high fives.
          Our program is built to provide direct, intimate, and experienced
          service so that you can fully realize your potential. We offer
          dedicated training and education, consultation, equipment service and
          sales, and convenience in ordering and delivery. We aim to make it
          easy and fun for you to focus on the coffee. As we have built four
          retail locations we have seen a lot, and are more than happy to help
          wherever possible to spread delicious coffee.
        </h2>
        <h2 className={styles.h22}>Drop us a line so we can better understand how to help you!</h2>
        <h3 className={styles.h3}>sales@varietycoffeeroasters.com</h3>
      </div>
    </div>
  );
};

export default WholeSale;
