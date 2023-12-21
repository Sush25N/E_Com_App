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
        const exist = state.cart.find(
          (product) =>
            product.id === productId.id &&
            product.size === productId.size &&
            product.color === productId.color
        );
        if (exist.amount === 1) {
          state.cart = state.cart.filter(
            (product) =>
              product.id !== productId.id ||
              product.size !== productId.size ||
              product.color !== productId.color
          );
          state.totalAmount--;
          state.totalPrice += productId.price;
        } else {
          exist.amount--;
          exist.totalPrice -= productId.price;
          state.totalAmount--;
          state.totalPrice -= productId.price;
        }
      } catch (err) {
        return err;
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

// cartSlice.js

// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     cart: [],
//     totalPrice: 0,
//   },
//   reducers: {
//     addToCart: (state, action) => {
//       const productId = action.payload;
//       try {
//         const exist = state.cart.find(
//           (product) =>
//             product.id === productId.id &&
//             product.size === productId.size &&
//             product.color === productId.color
//         );
//         if (exist) {
//           exist.amount++;
//           exist.totalPrice += productId.price;
//           state.totalPrice += productId.price;
//         } else {
//           state.cart.push({
//             id: productId.id,
//             price: productId.price,
//             size: productId.size,
//             amount: 1,
//             img: productId.img,
//             totalPrice: productId.price,
//             name: productId.name,
//             text: productId.text,
//             color: productId.color,
//           });
//           state.totalPrice += productId.price;
//         }
//       } catch (err) {
//         console.error(err);
//       }
//     },
//     removeFromCart: (state, action) => {
//       const productId = action.payload;
//       try {
//         const exist = state.cart.find(
//           (product) =>
//             product.id === productId.id &&
//             product.size === productId.size &&
//             product.color === productId.color
//         );
//         if (exist.amount === 1) {
//           state.cart = state.cart.filter(
//             (product) =>
//               product.id !== productId.id ||
//               product.size !== productId.size ||
//               product.color !== productId.color
//           );
//           state.totalPrice -= productId.price;
//         } else {
//           exist.amount--;
//           exist.totalPrice -= productId.price;
//           state.totalPrice -= productId.price;
//         }
//       } catch (err) {
//         console.error(err);
//       }
//     },
//     incrementQuantity: (state, action) => {
//       const { itemId } = action.payload;
//       const item = state.cart.find((item) => item.id === itemId);
//       if (item) {
//         item.amount += 1;
//         item.totalPrice = item.amount * item.price;
//         state.totalPrice += item.price;
//       }
//     },
//     decrementQuantity: (state, action) => {
//       const { itemId } = action.payload;
//       const item = state.cart.find((item) => item.id === itemId);
//       if (item) {
//         item.amount -= 1;
//         item.totalPrice = item.amount * item.price;
//         state.totalPrice -= item.price;
//       }
//     },
//   },
// });

// export const {
//   addToCart,
//   removeFromCart,
//   incrementQuantity,
//   decrementQuantity,
// } = cartSlice.actions;

// export default cartSlice.reducer;
