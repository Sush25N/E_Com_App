// import { createSlice } from "@reduxjs/toolkit";

// export const authSlice = createSlice({
//   name: "auth",
//   initialState: {
//     user: JSON.parse(sessionStorage.getItem("authUser")) || {
//       name: "",
//       password: "",
//       image: "",
//       authUser: false,
//     },
//   },
//   reducers: {
//     login(state, action) {
//       const userId = action.payload;
//       const userValidation = /^[A-Za-z]{4,10}$/i.test(userId.name);
//       const passwordValidation =
//         /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,10}$/i.test(
//           userId.password
//         );
//       state.user = userId;

//       if (!userValidation || !passwordValidation) {
//         state.user.authUser = false;
//       } else {
//         state.user.authUser = true;
//         const saveState = JSON.stringify(userId);
//         sessionStorage.setItem("authUser", saveState);
//       }
//     },
//     logout(state) {
//       state.user = {
//         name: "",
//         password: "",
//         image: "",
//         authUser: false,
//       };
//       sessionStorage.clear();
//     },
//   },
// });

// export const { login, logout } = authSlice.actions;
// export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(sessionStorage.getItem("authUser")) || {
      name: "",
      password: "",
      authUser: false,
    },
  },
  reducers: {
    login(state, action) {
      const userId = action.payload;
      const userValidation = /^[A-Za-z]{4,10}$/i.test(userId.name);
      const passwordValidation =
        /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,10}$/i.test(
          userId.password
        );
      state.user = userId;

      if (!userValidation || !passwordValidation) {
        state.user.authUser = false;
      } else {
        state.user.authUser = true;
        const saveState = JSON.stringify(userId);
        sessionStorage.setItem("authUser", saveState);
      }
    },
    signup(state, action) {
      const newUser = action.payload;
      const userValidation = /^[A-Za-z]{4,10}$/i.test(newUser.name);
      const passwordValidation =
        /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,10}$/i.test(
          newUser.password
        );

      // Assuming you have a confirmPassword field in your form
      const confirmPasswordValidation =
        newUser.password === newUser.confirmPassword;

      // Assuming you have a phoneNumber field in your form
      const phoneNumberValidation = /^[0-9]{10}$/i.test(newUser.phoneNumber);

      if (
        !userValidation ||
        !passwordValidation ||
        !confirmPasswordValidation ||
        !phoneNumberValidation
      ) {
        state.user.authUser = false;
      } else {
        state.user = newUser;
        state.user.authUser = true;
        const saveState = JSON.stringify(newUser);
        sessionStorage.setItem("authUser", saveState);
      }
    },
    logout(state) {
      state.user = {
        name: "",
        password: "",
        authUser: false,
      };
      sessionStorage.clear();
    },
  },
});

export const { login, signup, logout } = authSlice.actions;
export default authSlice.reducer;
