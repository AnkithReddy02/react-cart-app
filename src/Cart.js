import React from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
  const { products, increaseQuantity, decreaseQuantity, deleteProduct } = props;

  return (
    <div className="cart">
      {products.map((item) => {
        return (
          <CartItem
            item={item}
            key={item.id}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            deleteProduct={deleteProduct}
          />
        );
      })}
    </div>
  );
};

export default Cart;
