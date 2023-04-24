import styles from "../styles/SecondarySlidingMenu.module.css"
import Link from "next/link";

const SecondarySlidingMenu = ( {onToggleSlidingMenu, onToggleShopMenu, open, onClose} ) => {

    const links = [
        "Shop",
        "Subscribe",
        "Locations",
        "Wholesale",
        "Brewing",
        "LogIn",
        "Bag",
      ];
      return (
    <div
      className={`${styles.secondarySlideMenu} ${
        open ? styles.secondarySlideMenuOpen : ""
      }`}
    >
      <ul className={styles.ul}>
        {links.map((link) => (
          <Link
            key={link}
            href={`/${link}`}
            className={styles.link}
            onClick={(e) => {
              if (link === "Shop") {
                e.preventDefault();
                onToggleShopMenu(); // Call onToggleShopMenu instead of onToggleSlidingMenu
              }
            }}
          >
            <li className={styles.listItem} onClick={onClose}>
              {link}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
 
export default SecondarySlidingMenu;