import styles from "../styles/Bag.module.css";
import Image from "next/image";
import { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import Link from "next/link";
import { CREATE_CHECKOUT } from "../graphql/graphql";
import { useMutation } from "@apollo/client";

const Bag = () => {
  const { cartItems, updateItemQuantity, removeItem } = useContext(CartContext);
  const [createCheckout] = useMutation(CREATE_CHECKOUT);

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity < 1) {
      removeItem(itemId);
    } else {
      updateItemQuantity(itemId, newQuantity);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleCheckout = async () => {
    console.log('Handling checkout...'); 
    console.log('cartItems:', cartItems);
    const lineItems = cartItems
      .filter((item) => item.variantId)
      .map((item) => ({
        variantId: item.variantId,
        quantity: item.quantity,
      }));
  
    if (lineItems.length === 0) {
      console.error('No line items with valid variant IDs found');
      return;
    }
  
    try {
      console.log('lineItems:', lineItems);
      const { data } = await createCheckout({ variables: { lineItems } });
  
      // Redirect the user to the Shopify checkout URL
      window.location.href = data.checkoutCreate.checkout.webUrl;
    } catch (error) {
      console.error('Error creating checkout:', error, error.networkError, error.graphQLErrors);
    }
  }; 

 

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {cartItems.length === 0 ? (
          <div className={styles.emptyCart}>
            <h1 className={styles.emptyh1}>Your bag is empty</h1>
            <Link href="/collections/all">
              <button className={styles.continueShoppingBtn}>
                CONTINUE SHOPPING
              </button>
            </Link>
          </div>
        ) : (
          <>
            <div className={styles.topSection}>
              <h1 className={styles.title}>Bag</h1>
              <p className={styles.description}>Continue Shopping</p>
            </div>
            <div className={styles.midSection}>
              <p className={styles.title}>Product</p>
              <p>Quantity</p>
              <p className={styles.description}>Total</p>
            </div>
            <div className={styles.borderbottom}></div>
            {cartItems.map((item) => (
              <div key={item.id} className={styles.bottomSection}>
                <div className={styles.productSection}>
                  <Image
                    src={item.image.src}
                    width={240}
                    height={280}
                    className={styles.product}
                    alt={`Product image of ${item.title}`}
                  />
                  <div className={styles.productInfo}>
                    <h2 className={styles.name}>{item.title}</h2>
                  </div>
                </div>
                <div className={styles.counter}>
                  <button
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity - 1)
                    }
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                </div>
                <div className={styles.deleteBtnContainer}>
                  <p
                    className={styles.deleteBtn}
                    onClick={() => removeItem(item.id)}
                  >
                    🗑️
                  </p>
                </div>
                <div className={styles.priceContainer}>
                  <p className={styles.price}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
            <div className={styles.borderbottom}></div>
            <div className={styles.subTotalContainer}>
              <p className={styles.subTotal}>
                Subtotal:
                <span className={styles.span}>${subtotal.toFixed(2)}</span>
              </p>
              <p className={styles.taxes}>
                Taxes and shipping calculated at checkout
              </p>
              <div>
                <button className={styles.checkOut}  onClick={handleCheckout}>PROCEED TO CHECKOUT</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Bag;
