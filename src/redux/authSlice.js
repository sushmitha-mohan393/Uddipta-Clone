// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   token: null,
//   user: null,
//   encryptValue: null,
//   loginResponse: null,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState: {
//     loginResponse: null,
//     onboarded: false,
//   },
//   reducers: {
//     saveAuthData: (state, action) => {
   
//      state.loginResponse = action.payload; 
//     },
//   showOnboarding:(state)=>{
// state.onboarded = true;
//   },
//    logout: (state) => {
//       state.loginResponse = null;
      
//     },

//   }
// });

// export const { saveAuthData, logout,showOnboarding } = authSlice.actions;
// export default authSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginResponse: null,
 isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.loginResponse = action.payload;
       state.isLoggedIn = true;
    },
    logout: (state) => {
      state.loginResponse = null;
     state.isLoggedIn = false;
    },
  }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
