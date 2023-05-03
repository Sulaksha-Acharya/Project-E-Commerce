import React from "react";
import { FcLike } from "react-icons/fc";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
import { toast } from "react-toastify";
import BasicModal from "./Modal";
import Wishlist from "../Pages/Wishlist";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";

const ItemCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showBasicModal, setShowBasicModal] = React.useState(false);

  // methods;
  const addToCart = () => {
    if (auth) {
      navigate("/login");
    } else {
      navigate("/login");
    }
    // const handleSignIn = async () => {
    //   signInWithEmailAndPassword(authentication, email, password)
    //     .then((res) => {
    //       dispatch(userActions.loginUser(res.user));
    //       navigate("login");
    //     })

    //     .catch((err) => {
    //       console.log(err);
    //     });
    // };
    toast.success("Product has been added to cart");

    dispatch(
      cartActions.addToCart({
        ...product,
      })
    );
  };
  const addToWishlist = () => {
    if (auth) {
      navigate("/login");
    } else {
      navigate("/login");
    }
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
      <Card>
        <CardMedia
          sx={{ height: 120, objectFit: "cover" }}
          image={product.image}
          title="Laptop"
        />

        <CardContent>
          <Typography gutterBottom variant="subtitle" component="div">
            {product.title}
          </Typography>
        </CardContent>

        <CardActions>
          <FcLike />
          <IconButton
            size="small"
            onClick={() => {
              setShowBasicModal(true);
            }}
          >
            Wishlist
          </IconButton>
          <IconButton size="small" onClick={addToCart}>
            <AddShoppingCartOutlinedIcon />
          </IconButton>
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
