import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Product = ({ name, id, imgURL, price }) => {
  const navigate = useNavigate();
  // const cartItems = useSelector((state) => state.cart.items);
  const dispatch = dispatch();
  const addToCart = () => {
    navigate("/login");
    // toast.success("Items has been added to cart");

    // dispatch(
    //   cartActions.addToCart({
    //     name,
    //     id,
    //     price,
    //   })
    // );
  };
  const Product = () => {
    const dispatch = dispatch();
    const wishlist = () => {
      navigate("/login");
    };
    return (
      <div className="card">
        <img src={imgURL} alt={name} />
        <h2>{name}</h2>
        <p>$ {price}</p>
        <button onClick={addToCart}>Add to cart</button>
      </div>
    );
  };
};
export default Product;
