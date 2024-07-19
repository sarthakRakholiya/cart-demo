// ***** start - imports from package *****
import { createSlice } from "@reduxjs/toolkit";
// ***** end - imports from package *****

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {

    // Add product in cart action
    addNewItemInCart: (state, action) => {
      return [...state, action.payload];
    },

    // Remove product in cart action
    removeItemFromCart: (state, action) => {
      return [
        ...state.filter(
          (ele) =>
            !(
              ele.id === action.payload.id &&
              ele.color.id === action.payload.color.id
            )
        ),
      ];
    },

    // Increse quantity of product action
    incrementItemQuantity: (state, action) => {
      state[action.payload] = {
        ...state[action.payload],
        quantity: state[action.payload].quantity + 1,
      };
    },

    // Decrese quantity of product action
    decrementItemQuantity: (state, action) => {
      if (state[action.payload].quantity === 1) {
        return [...state.filter((_, index) => index !== action.payload)];
      } else {
        state[action.payload] = {
          ...state[action.payload],
          quantity: state[action.payload].quantity - 1,
        };
      }
    },
  },
});

// ***** start - export actions *****
export const {
  addNewItemInCart,
  removeItemFromCart,
  incrementItemQuantity,
  decrementItemQuantity,
} = cartSlice.actions;
// ***** end - export actions *****

export default cartSlice.reducer;