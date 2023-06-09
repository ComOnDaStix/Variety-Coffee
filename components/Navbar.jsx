import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import BagComponent from "../components/BagComponent";
import SlidingMenu from "./SlidingMenu";
import { useState, useEffect, useRef } from "react";
import SecondarySlidingMenu from "./SecondarySlidingMenu";
import SmallCart from "./SmallCart";

const Navbar = ({ smallCartVisible }) => {
  const navbarRef = useRef(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  const [secondaryMenuOpen, setSecondaryMenuOpen] = useState(false);
  const [shopMenuOpen, setShopMenuOpen] = useState(false);

  const toggleSecondaryMenu = () => {
    setSecondaryMenuOpen(!secondaryMenuOpen);
    setShopMenuOpen(false);
  };

  const toggleShopMenu = () => {
    setShopMenuOpen(!shopMenuOpen);
    setSecondaryMenuOpen(false);
  };

  const closeMenus = () => {
    setSecondaryMenuOpen(false);
    setShopMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const checkMobileView = () => {
      setMobileView(window.innerWidth <= 768);
    };

    checkMobileView();
    window.addEventListener("resize", checkMobileView);
    return () => {
      window.removeEventListener("resize", checkMobileView);
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

return (
    <>
      <div className={styles.wrapper} ref={navbarRef}>
        {mobileView ? (
          <ul className={styles.listContainer}>
            <li className={styles.listItems} onClick={toggleMenu}>
              MENU
            </li>
            <Link href="/" className={styles.link}>
              <li className={styles.logo}>
                <Image src={"/logo.avif"} width={87} height={40} className={styles.logo2} alt="logo"/>
              </li>
            </Link>
            <Link href="/Bag" className={styles.link}>
              <BagComponent
                className={styles.listItems}
                onClick={closeMenu}
              />
            </Link>
          </ul>
        ) : (
          <ul className={styles.listContainer}>
            <Link href="/" className={styles.link}>
              <li>
                <Image src={"/logo.avif"} width={87} height={40} />
              </li>
            </Link>
            <Link href="/" className={styles.link}>
              <li className={styles.listItems} onClick={toggleMenu}>
                SHOP
              </li>
            </Link>
            <Link href="/Subscribe" className={styles.link}>
              <li className={styles.listItems} onClick={closeMenu}>
                SUBSCRIBE
              </li>
            </Link>
            <Link href="/Locations" className={styles.link}>
              <li className={styles.listItems} onClick={closeMenu}>
                LOCATIONS
              </li>
            </Link>
            <Link href="/WholeSale" className={styles.link}>
              <li className={styles.listItems} onClick={closeMenu}>
                WHOLESALE
              </li>
            </Link>
            <Link href="/Brewing" className={styles.link}>
              <li className={styles.listItems} onClick={closeMenu}>
                BREWING
              </li>
            </Link>
            <Link href="/LogIn" className={styles.link}>
              <li className={styles.listItems} onClick={closeMenu}>
                LOG IN
              </li>
            </Link>

            <Link href="/Bag" className={styles.link}>
              <BagComponent className={styles.listItems} onClick={closeMenu} />
            </Link>
          </ul>
        )}
      </div>
     
      <SlidingMenu open={menuOpen} onClose={closeMenu} />
      <SmallCart navbarRef={navbarRef} />
    </>
  );
}

export default Navbar;
  
