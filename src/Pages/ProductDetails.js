import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions, wishlistItemlist } from "../store/cart-slice";
import { latestProducts } from "./Home";
import { Link, useParams } from "react-router-dom";
import { Button, Card, Container } from "react-bootstrap";
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
      <Container>
        <img src={product.image} alt={product.name} width="600" height="400" />
      </Container>

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
        <Card>
          <h2>{product.name}</h2>
          <div>
            <Button variant="primary" size="sm" onClick={handleAddToCart}>
              Add to Cart
            </Button>
          </div>
          <Link to="/cart" style={{ color: "#fff", textDecoration: "none" }}>
            Add to Cart
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default ProductDetails;
