import "./styles.css";
import CartItem from "./CartItem";
import Cart from "./Cart";
import Navbar from "./Navbar";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        {
          price: 999,
          title: "Phone",
          qty: 1,
          img: " ",
          id: 1
        },
        {
          price: 1999,
          title: "Watch",
          qty: 3,
          img: " ",
          id: 2
        },
        {
          price: 91999,
          title: "Table",
          qty: 5,
          img: " ",
          id: 3
        }
      ]
    };
  }

  increaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;

    this.setState({
      products: products
    });
  };

  decreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty > 0) {
      products[index].qty -= 1;

      this.setState({
        products: products
      });
    }
  };

  deleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => {
      return item.id !== id;
    });

    this.setState({
      products: items
    });
  };

  getCartCount = () => {
    let count = 0;

    const { products } = this.state;

    products.forEach((product) => {
      count += product.qty;
    });

    return count;
  };

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          increaseQuantity={this.increaseQuantity}
          decreaseQuantity={this.decreaseQuantity}
          deleteProduct={this.deleteProduct}
        />
        <br />
      </div>
    );
  }
}

export default App;
