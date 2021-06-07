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
          qty: 0,
          img:
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          id: 1
        },
        {
          price: 1999,
          title: "Watch",
          qty: 0,
          img:
            "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
          id: 2
        },
        {
          price: 999,
          title: "Table",
          qty: 0,
          img:
            "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
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

  getTotal = () => {
    let totalCost = 0;

    const { products } = this.state;

    products.forEach((product) => {
      totalCost += product.qty * product.price;
    });

    return totalCost;
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
        <div style={{ padding: 10, fontSize: 20 }}>
          TOTAL : {this.getTotal()}{" "}
        </div>
      </div>
    );
  }
}

export default App;
