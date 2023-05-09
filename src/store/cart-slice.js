import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsList: [],
    wishlist: [],
    totalQuantity: 0,
    showCart: false,
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;

      const existingItem = state.itemsList.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        console.log(newItem.id);
        state.itemsList = state.itemsList.map((item) =>
          item.id === newItem.id
            ? {
                ...item,
                quantity: item.quantity + 1,
                // price: item.price + newItem.price,
              }
            : item
        );
        // existingItem.quantity++;
        // existingItem.price += newItem.price;
      } else {
        state.itemsList.push({
          ...action.payload,
          quantity: 1,
        });
        state.totalQuantity++;
      }
    },

    addProductQuantity(state, action) {
      const product = action.payload;
      state.itemsList = state.itemsList.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );
    },

    removeProductQuantity(state, action) {
      const product = action.payload;
      state.itemsList = state.itemsList.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      );
    },

    removeFromCart(state, action) {
      const product = action.payload;
      state.itemsList = state.itemsList.filter(
        (item) => item.id !== product.id
      );
    },

    removeFromWishlist(state, action) {
      const product = action.payload;
      state.wishlist = state.wishlist.filter((item) => item.id !== product.id);
    },
    setShowCart(state) {
      state.showCart = true;
    },

    addToWishlist(state, action) {
      const newItem = action.payload;

      const existingItem = state.wishlist.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        state.wishlist = state.wishlist.filter((p) => p.id !== existingItem.id);
        // existingItem.quantity++;
        // existingItem.price += newItem.price;
      } else {
        state.wishlist.push({
          ...action.payload,
          quantity: 1,
        });
        state.totalQuantity++;
      }
    },

    clearCart(state) {
      state.itemsList = [];
      state.wishlist = [];
    },
  },
});

export const cartActions = cartSlice.actions;
export const selectItemlist = (state) => state.cart.itemsList;
export const wishlistItemlist = (state) => state.cart.wishlist;
export const selectItemCount = (state) => state.cart.itemsList.length;

export default cartSlice;
