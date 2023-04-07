import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
// import { Provider } from 'react-redux';
// import About from "./About/";
import About from "./Pages/About";
import Product from "./component/Product";
import Contact from "./Pages/Contact";
import SingleProduct from "./SingleProduct";
import Home from "./Pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Pages/Loginpage";
import Wishlist from "./Pages/Wishlist";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Router>
      <Header />
      <ToastContainer />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/singleproduct/:id" element={<SingleProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
