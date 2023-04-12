import styles from "../styles/SlidingMenu.module.css";
import Link from "next/link";

const SlidingMenu = ({ open, onClose }) => {

  

  const categories = [
    { name: "All", count: 42 },
    { name: "Coffee", count: 10 },
    { name: "Tea", count: 8 },
    { name: "Equipment", count: 11 },
    { name: "Kits", count: 2 },
    { name: "GiftCards", count: 0 },
    { name: "Swag", count: 5 },
  ];
    
  return (
    <div className={`${styles.slideMenu} ${open ? styles.slideMenuOpen : ""}`}>
    <ul className={styles.ul}>
      {categories.map((category) => (
        <Link
          key={category.name}
          href={`/collections${category.name === "All" ? "/all" : `/${category.name}`}`}
          className={styles.link}
        >
          <li className={styles.listItem} onClick={onClose}>
            {category.name} <span className={styles.count}>({category.count})</span>
          </li>
        </Link>
      ))}
    </ul>
  </div>
  );
};

export default SlidingMenu;
