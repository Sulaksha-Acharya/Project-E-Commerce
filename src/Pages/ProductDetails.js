import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions, wishlistItemlist } from "../store/cart-slice";
import { latestProducts } from "./Home";
import { useParams } from "react-router-dom";
// import { cartActions } from "../store/cart-slice";
// import { cartActions } from "../store/cart-slice";

const ProductDetails = ({ match }) => {
  const [quantity, setQuantity] = useState(1);

  const { id } = useParams();
  console.log(id);

  const dispatch = useDispatch();
  console.log(latestProducts);

  const product = latestProducts.find((p) => p?.id.toString() === id);

  console.log({ product });

  const handleAddToCart = () => {
    dispatch(cartActions.addToCart(product, quantity));
    alert(`${quantity} ${product.name} add to cart`);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <div className="product-details">
      <p>{product.name}</p>

      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <div className="quantity">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
          />
        </div>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
