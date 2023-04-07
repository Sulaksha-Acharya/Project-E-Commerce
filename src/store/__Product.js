// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { cartActions } from "./store/cart-slice";
// // import ddd from '../src/asset/ddd.jpg'

// const Product = ({ name, id, imgURL, price }) => {
//   const cartItems = useSelector((state) => state.cart.itemsList);
//   console.log(cartItems);
//   const dispatch = useDispatch();
//   const addToCart = () => {
//     dispatch(
//       cartActions.addToCart({
//         name: "Product A",
//         id: 22,
//         price: 2000,
//       })
//     );
//   };
//   return (
//     <div className="cart">
//       {/* <img className='ddd' src={ddd} alt="img" width={'250'} height={200} style={{marginLeft:10}} /> */}
//       <h2>Headphone</h2>
//       <p>${2000}</p>
//       <button onClick={addToCart}>addToCart</button>
//     </div>
//   );
// };
