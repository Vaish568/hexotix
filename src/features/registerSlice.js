import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  register: {},
  login: {},
  oldUser: [],
};
export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    addRegisterData(state, action) {
      state.oldUser.push(action.payload);
    },
    resetPassword(state, action) {
      let found = state.oldUser?.some((e) => e.email === action.payload.email);
      if (found) {
        let index = state.oldUser?.findIndex(
          (e) => e.email === action.payload.email
        );
        state.oldUser[index].password = action.payload.password;
        alert("Password changed successfully!");
      } else {
        alert("Incorrect email or passowrd");
      }
    },
  },
});
export const { addRegisterData, resetPassword } = registerSlice.actions;
export default registerSlice.reducer;
