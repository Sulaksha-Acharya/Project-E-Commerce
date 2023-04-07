import React from "react";
import { toast } from "react-toastify";

const Product = ({ name, id, imgURL, price }) => {
  // const cartItems = useSelector((state) => state.cart.items);
  const dispatch = dispatch();
  const addToCart = () => {
    toast.success("Items has been added to cart");

    // dispatch(
    //   cartActions.addToCart({
    //     name,
    //     id,
    //     price,
    //   })
    // );
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

export default Product;
