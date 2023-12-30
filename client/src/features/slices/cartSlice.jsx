import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    amount: 0,
    totalAmount: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart(state, action) {
      const productId = action.payload;
      try {
        const exist = state.cart.find(
          (product) =>
            product.id === productId.id &&
            product.size === productId.size &&
            product.color === productId.color
        );
        if (exist) {
          exist.amount++;
          exist.totalPrice += productId.price;
          state.totalAmount++;
          state.totalPrice += productId.price;
        } else {
          state.cart.push({
            id: productId.id,
            price: productId.price,
            size: productId.size,
            amount: 1,
            img: productId.img,
            totalPrice: productId.price,
            name: productId.name,
            text: productId.text,
            color: productId.color,
          });
          state.totalAmount++;
          state.totalPrice += productId.price;
        }
      } catch (err) {
        return err;
      }
    },
    removeFromCart(state, action) {
      const productId = action.payload;

      try {
        const existIndex = state.cart.findIndex(
          (product) =>
            product.id === productId.id &&
            product.size === productId.size &&
            product.color === productId.color
        );

        if (existIndex !== -1) {
          const exist = state.cart[existIndex];

          if (exist.amount === 1) {
            // Remove the entire entity from the cart
            state.cart.splice(existIndex, 1);
          } else {
            // Decrease the amount and update totalPrice
            exist.amount--;
            exist.totalPrice -= productId.price;
          }

          // Update totalAmount and totalPrice
          state.totalAmount--;
          state.totalPrice -= productId.price;
        }
      } catch (err) {
        console.error("Error removing from cart:", err);
      }
    },

    incrementQuantity(state, action) {
      const { id, size, color } = action.payload;
      const product = state.cart.find(
        (item) => item.id === id && item.size === size && item.color === color
      );

      if (product) {
        product.amount += 1;
        product.totalPrice += product.price;
        state.totalAmount += 1;
        state.totalPrice += product.price;
      }
    },

    decrementQuantity(state, action) {
      const { id, size, color } = action.payload;
      const product = state.cart.find(
        (item) => item.id === id && item.size === size && item.color === color
      );

      if (product) {
        if (product.amount === 1) {
          state.cart = state.cart.filter(
            (item) =>
              !(item.id === id && item.size === size && item.color === color)
          );
          state.totalAmount -= 1;
          state.totalPrice -= product.price;
        } else {
          product.amount -= 1;
          product.totalPrice -= product.price;
          state.totalAmount -= 1;
          state.totalPrice -= product.price;
        }
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
