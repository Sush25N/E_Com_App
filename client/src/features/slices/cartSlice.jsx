// import { createSlice } from "@reduxjs/toolkit";

// export const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     cart: [],
//     amount: 0,
//     totalAmount: 0,
//     totalPrice: 0,
//   },
//   reducers: {
//     addToCart(state, action) {
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
//           state.totalAmount++;
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
//           state.totalAmount++;
//           state.totalPrice += productId.price;
//         }
//       } catch (err) {
//         return err;
//       }
//     },
//     removeFromCart(state, action) {
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
//           state.totalAmount--;
//           state.totalPrice -= productId.price;
//         } else {
//           exist.amount--;
//           exist.totalPrice -= productId.price;
//           state.totalAmount--;
//           state.totalPrice -= productId.price;
//         }
//       } catch (err) {
//         return err;
//       }
//     },

//     incrementQuantity(state, action) {
//       const { id, size, color } = action.payload;
//       const product = state.cart.find(
//         (item) => item.id === id && item.size === size && item.color === color
//       );

//       if (product) {
//         product.amount += 1;
//         product.totalPrice += product.price;
//         state.totalAmount += 1;
//         state.totalPrice += product.price;
//       }
//     },

//     decrementQuantity(state, action) {
//       const { id, size, color } = action.payload;
//       const product = state.cart.find(
//         (item) => item.id === id && item.size === size && item.color === color
//       );

//       if (product) {
//         if (product.amount === 1) {
//           state.cart = state.cart.filter(
//             (item) =>
//               !(item.id === id && item.size === size && item.color === color)
//           );
//           state.totalAmount -= 1;
//           state.totalPrice -= product.price;
//         } else {
//           product.amount -= 1;
//           product.totalPrice -= product.price;
//           state.totalAmount -= 1;
//           state.totalPrice -= product.price;
//         }
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

import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
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
        }
        state.totalAmount++;
        state.totalPrice += productId.price;
      } catch (err) {
        console.error(err);
      }
    },
    removeFromCart(state, action) {
      const productId = action.payload;
      try {
        const productsToRemove = state.cart.filter(
          (product) =>
            product.id === productId.id &&
            product.size === productId.size &&
            product.color === productId.color
        );

        if (productsToRemove.length > 0) {
          const totalPriceToRemove = productsToRemove.reduce(
            (total, product) => total + product.price * product.amount,
            0
          );

          state.cart = state.cart.filter(
            (product) =>
              !(
                product.id === productId.id &&
                product.size === productId.size &&
                product.color === productId.color
              )
          );

          state.totalAmount -= productsToRemove.length;
          state.totalPrice -= totalPriceToRemove;
        }
      } catch (err) {
        console.error(err);
      }
    },

    incrementQuantity(state, action) {
      const { id, size, color } = action.payload;
      const product = state.cart.find(
        (item) => item.id === id && item.size === size && item.color === color
      );
      if (product) {
        product.amount++;
        product.totalPrice += product.price;
        state.totalAmount++;
        state.totalPrice += product.price;
      }
    },
    decrementQuantity(state, action) {
      const { id, size, color } = action.payload;
      const productIndex = state.cart.findIndex(
        (item) => item.id === id && item.size === size && item.color === color
      );
      if (productIndex !== -1) {
        const product = state.cart[productIndex];
        if (product.amount === 1) {
          state.cart.splice(productIndex, 1);
        } else {
          product.amount--;
          product.totalPrice -= product.price;
        }
        state.totalAmount--;
        state.totalPrice -= product.price;
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
