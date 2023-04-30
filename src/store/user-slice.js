import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    loggedInUser: JSON.parse(localStorage.getItem("user-info")) || null,
    name: "",
    email: "",
    id: "",
  },
  reducers: {
    loginUser(state, action) {
      const data = action.payload;
      state.loggedInUser = data;
      localStorage.setItem("user-info", JSON.stringify(data));
    },
    logout(state) {
      localStorage.removeItem("user-info");
      state.loggedInUser = null;
    },
  },
});

export const userActions = userSlice.actions;
export const selectUserInfo = (state) => state.user.loggedInUser;
// export const wishlistItemlist = (state) => state.cart.wishlist;
// export const selectItemCount = (state) => state.cart.itemsList.length;

export default userSlice;
