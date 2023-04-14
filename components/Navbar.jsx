import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import BagComponent from "../components/BagComponent"
import SlidingMenu from "./SlidingMenu";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import SmallCart from "./SmallCart";


const Navbar = () => {

  
 
  const router = useRouter();
  
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };
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
    <div className={styles.wrapper}>
      <ul className={styles.listContainer}>
        <Link href="/" className={styles.link}>
          <li>
            <Image src={"/logo.avif"} width={87} height={40}/>
          </li>
        </Link>
        <Link href="/" className={styles.link}>
          <li className={styles.listItems} onClick={toggleMenu}>SHOP</li>
        </Link>
        <Link href="Subscribe" className={styles.link}>
          <li className={styles.listItems}  onClick={closeMenu}>SUBSCRIBE</li>
        </Link>
        <Link href="Locations" className={styles.link}>
          <li className={styles.listItems}  onClick={closeMenu}>LOCATIONS</li>
        </Link>
        <Link href="WholeSale" className={styles.link}>
          <li className={styles.listItems}  onClick={closeMenu}>WHOLESALE</li>
        </Link>
        <Link href="Brewing" className={styles.link}>
          <li className={styles.listItems}  onClick={closeMenu}>BREWING</li>
        </Link>
        <Link href="LogIn" className={styles.link}>
          <li className={styles.listItems}  onClick={closeMenu}>LOG IN</li>
        </Link>
        <Link href="Bag" className={styles.link}>
          <BagComponent className={styles.listItems}  onClick={closeMenu}/>
        </Link>
      </ul>
      
    </div>
    <SlidingMenu open={menuOpen}  onClose={closeMenu}/>
    <SmallCart />
    </>
  );
};

export default Navbar;
