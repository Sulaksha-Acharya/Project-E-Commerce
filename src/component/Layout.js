import React from "react";
import Product from "./component/store/Product";
import Header from "../Header";
import { useSelector } from "react-redux";
// import CartItems from "./CartItems";
import ItemCard from "../ItemCard";

const Layout = () => {
  let total = 100;
  const showCart = useSelector((state) => state.cart.itemsList.length > 0);

  return (
    <React.Fragment>
      <div className="layout">
        <Header />

        <Product />

        {showCart && <CartItems />}

        {JSON.stringify(showCart)}

        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn"> Place Order</button>
        </div>
        {""}
      </div>
    </React.Fragment>
  );
};

export default Layout;
