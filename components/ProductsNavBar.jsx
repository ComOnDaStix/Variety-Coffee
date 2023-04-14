import Link from "next/link";
import styles from "../styles/ProductsNavBar.module.css";

const ProductsNavBar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <ul className={styles.ul}>
          <Link href="/collections/coffee" className={styles.link}>
            <li className={styles.li}>COFFEE</li>
          </Link>
          <Link href="/collections/equipment" className={styles.link}>
            <li className={styles.li}>EQUIPMENT</li>
          </Link>
          <Link href="/collections/tea" className={styles.link}>
            <li className={styles.li}>TEA</li>
          </Link>
          <Link href="/collections/swag" className={styles.link}>
            <li className={styles.li}>SWAG</li>
          </Link>
          <Link href="/collections/giftPacks" className={styles.link}>
            <li className={styles.li}>GIFT PACKS</li>
          </Link>
          <Link href="/collections/giftCards" className={styles.link}>
            <li className={styles.li}>GIFT CARDS</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default ProductsNavBar;
