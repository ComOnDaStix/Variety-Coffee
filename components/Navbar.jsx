import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import BagComponent from "./BagComponent";

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.listContainer}>
        <Link href="/" className={styles.link}>
          <li>
            <Image src={"/logo.avif"} width={87} height={40}/>
          </li>
        </Link>
        <Link href="/" className={styles.link}>
          <li className={styles.listItems}>SHOP</li>
        </Link>
        <Link href="/" className={styles.link}>
          <li className={styles.listItems}>SUBSCRIBE</li>
        </Link>
        <Link href="/" className={styles.link}>
          <li className={styles.listItems}>LOCATIONS</li>
        </Link>
        <Link href="/" className={styles.link}>
          <li className={styles.listItems}>WHOLESALE</li>
        </Link>
        <Link href="/" className={styles.link}>
          <li className={styles.listItems}>BREWING</li>
        </Link>
        <Link href="/" className={styles.link}>
          <li className={styles.listItems}>LOG IN</li>
        </Link>
        <Link href="/" className={styles.link}>
          <BagComponent className={styles.listItems}/>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
