import { useContext, useEffect, useState, useRef } from "react";
import { CartContext } from "../context/CartContext";
import styles from "../styles/SmallCart.module.css";
import CheckOutBtn from "./CheckOutBtn";
import Link from "next/link";
import { useRouter } from "next/router";

const SmallCart = ({ navbarRef }) => {
  const { cartItems, itemAdded, setItemAdded } = useContext(CartContext);
  const [visible, setVisible] = useState(false);
  const smallCartRef = useRef(null);

  useEffect(() => {
    if (itemAdded) {
      setVisible(true);
    }
  }, [itemAdded]);

  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current && smallCartRef.current) {
        const navbarBottom = navbarRef.current.getBoundingClientRect().bottom;
        smallCartRef.current.style.top =
          navbarBottom >= 0 ? `${navbarBottom}px` : "0px";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClickOutside = (e) => {
    if (e.target.closest(`.${styles.notificationWrapper}`) === null) {
      setVisible(false);
      setItemAdded(false);
    }
  };

  useEffect(() => {
    if (visible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [visible]);

  if (!visible) return null;

  const lastItem = cartItems[cartItems.length - 1];

  const router = useRouter();


  

  return (
    <>
      {visible && <div className={styles.overlay}></div>}
      <div
        className={`${styles.notificationWrapper} ${styles.smallCartMobile}`}
        ref={smallCartRef}
      >
        <div className={styles.notification}>
          <p>Item added to your bag</p>
          <div className={styles.content}>
            <img
              src={lastItem.image.src}
              alt={lastItem.title}
              className={styles.img}
            />
            <div className={styles.info}>
              <h3 className={styles.h3}>{lastItem.title}</h3>
              <p className={styles.quantity}>Quantity: {lastItem.quantity}</p>
              <p className={styles.price}>
                Price: ${(lastItem.price * lastItem.quantity).toFixed(2)}
              </p>
            </div>
          </div>
        </div>
        <div className={styles.subTotal}>
          <div className={styles.subTotalContainer}>
            <p className={styles.sub}>
              subtotal: <span>${lastItem.price}</span>
            </p>
            <p className={styles.shipping}>
              Shipping and taxes calculated at checkout.
            </p>
          </div>
        </div>
        <Link href="/Bag" className={styles.checkoutLink}>
          <div className={styles.btnContainer}>
            <CheckOutBtn className={styles.proceedButton} />
          </div>
        </Link>
      </div>
    </>
  );
};

export default SmallCart;
