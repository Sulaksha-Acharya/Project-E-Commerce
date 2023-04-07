import React from "react";
import { FcLikePlaceholder } from "react-icons/fc";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
import { toast } from "react-toastify";
import BasicModal from "./Modal";
import Wishlist from "../Pages/Wishlist";

const ItemCard = ({ product }) => {
  const dispatch = useDispatch();

  const [showBasicModal, setShowBasicModal] = React.useState(false);

  // methods
  const addToCart = () => {
    toast.success("Product has been added to cart");

    dispatch(
      cartActions.addToCart({
        ...product,
      })
    );
  };
  const addToWishlist = () => {
    toast.success("Product has been added to wishlist");

    dispatch(
      cartActions.addToWishlist({
        ...product,
      })
    );

    setShowBasicModal(false);
  };
  return (
    <>
      <Card sx={{ maxWidth: 280 }}>
        <CardMedia sx={{ height: 140 }} image={product.image} title="Laptop" />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
        </CardContent>

        <CardActions>
          <FcLikePlaceholder />
          <Button
            size="small"
            onClick={() => {
              setShowBasicModal(true);
              // <Button size="small" onClick={Wishlist}>
              //   Wishlist
              // </Button>;
              // addToWishlist()
            }}
          >
            Wishlist
          </Button>

          <Button size="small" onClick={addToCart}>
            Add to Cart
          </Button>
        </CardActions>
      </Card>

      {showBasicModal && (
        <BasicModal
          open={showBasicModal}
          handleClose={() => setShowBasicModal(false)}
          handleAddWishlist={addToWishlist}
        />
      )}
    </>
  );
};

export default ItemCard;
