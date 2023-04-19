import Bag from "@/pages/Bag";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";


const BagComponent = ({ className, onClick }) => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className={className} onClick={onClick}>
      BAG <span>({cartItems.length})</span>
    </div>
  );
};

export default BagComponent;