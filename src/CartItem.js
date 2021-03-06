import React from "react";

const CartItem = (props) => {
  var { price, title, qty, id } = props.item;
  return (
    <div className="cart-item">
      <div className="left-block">
        <img style={styles.image} src={props.item.img} />
      </div>
      <div className="right-block">
        <div style={{ fontSize: 25 }}>{title}</div>
        <div style={{ color: "#777" }}>Rs {price}</div>
        <div style={{ color: "#777" }}>Qty: {qty}</div>
        <div className="cart-item-actions">
          <img
            alt="increase"
            className="action-icons"
            onClick={() => {
              props.increaseQuantity(props.item);
            }}
            src="https://image.flaticon.com/icons/png/512/1828/1828926.png"
          />
          <img
            alt="decrease"
            onClick={() => {
              props.decreaseQuantity(props.item);
            }}
            className="action-icons"
            src="https://image.flaticon.com/icons/png/512/992/992683.png"
          />
          <img
            alt="delete"
            className="action-icons"
            onClick={() => {
              props.deleteProduct(id);
            }}
            src="https://image.flaticon.com/icons/png/512/1214/1214428.png"
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  image: {
    height: 122,
    width: 122,
    borderRadius: 4,
    background: "#ccc"
  }
};

export default CartItem;
