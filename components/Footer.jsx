import styles from "../styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.logo}>
            <Image
              src={"/logo2.webp"}
              width={300}
              height={140}
              className={styles.img}
            />
          </div>
          <div className={styles.linkContainer}>
            <div className={styles.links}>
              <h2 className={styles.h2}>SHOP</h2>
              <ul className={styles.ul}>
                <li className={styles.li}>
                  <Link href="#" passHref>
                    <span>All</span>
                  </Link>
                </li>
                <li className={styles.li}>
                  <Link href="#" passHref>
                    <span>Tea</span>
                  </Link>
                </li>
                <li className={styles.li}>
                  <Link href="#" passHref>
                    <span>Equipment</span>
                  </Link>
                </li>
                <li className={styles.li}>
                  <Link href="#" passHref>
                    <span>Kits</span>
                  </Link>
                </li>
                <li className={styles.li}>
                  <Link href="#" passHref>
                    <span>Swag</span>
                  </Link>
                </li>
                <li className={styles.li}>
                  <Link href="#" passHref>
                    <span>Gift Cards</span>
                  </Link>
                </li>
                <li className={styles.li}>
                  <Link href="#" passHref>
                    <span>Swag</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.links}>
              <h2 className={styles.h2}>COMPANY</h2>
              <ul className={styles.ul}>
                <li className={styles.li}>
                  <Link href="#" passHref>
                    <span>About</span>
                  </Link>
                </li>
                <li className={styles.li}>
                  <Link href="#" passHref>
                    <span>Locations</span>
                  </Link>
                </li>
                <li className={styles.li}>
                  <Link href="#" passHref>
                    <span>Work With Us</span>
                  </Link>
                </li>
                <li className={styles.li}>
                  <Link href="#" passHref>
                    <span>Wholesale</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.links}>
              <h2 className={styles.h2}>SUPPORT</h2>
              <ul className={styles.ul}>
                <li className={styles.li}>
                  <Link href="#" passHref>
                    <span>FAQ</span>
                  </Link>
                </li>
                <li className={styles.li}>
                  <Link href="#" passHref>
                    <span>Shipping</span>
                  </Link>
                </li>
                <li className={styles.li}>
                  <Link href="#" passHref>
                    <span>Returns</span>
                  </Link>
                </li>
                <li className={styles.li}>
                  <Link href="#" passHref>
                    <span>Contact Us</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.links}>
              <h2 className={styles.h2}>QUICK LINKS</h2>
              <ul className={styles.ul}>
                <li className={styles.li}>
                  <Link href="#" passHref>
                    <span>Instagram</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.text}>
            <h3 className={styles.h3}>SUBSCRIBE TO OUR EMAIL</h3>
            <div className={styles.inputContainer}>
              <input
                type="email"
                placeholder="email address"
                className={styles.emailInput}
              />
              <button className={styles.submitButton}>Subscribe</button>
            </div>
          </div>
          <div className={styles.footerInfo}>
            <ul className={styles.footerInfo2}>
                <li className={styles.li2}>Accessibility</li>
                <li className={styles.li2}>Terms</li>
                <li className={styles.li2}>Privacy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
