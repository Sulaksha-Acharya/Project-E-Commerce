import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Product = ({ name, id, imgURL, price }) => {
  const navigate = useNavigate();
  const dispatch = dispatch();
  const addToCart = () => {
    navigate("/login");
  };
  const Product = () => {
    const dispatch = dispatch();
    const wishlist = () => {
      navigate("/login");
    };
    return (
      <div className="card">
        <img src={imgURL} alt={name} />
        <h1>{name}</h1>
        <p>$ {price}</p>
        <button onClick={addToCart}>Add to cart</button>
      </div>
    );
  };
};
export default Product;
