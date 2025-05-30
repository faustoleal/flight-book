import { createSlice } from "@reduxjs/toolkit";
import loginService from "../services/login";

const loginSlice = createSlice({
  name: "login",
  initialState: null,
  reducers: {
    login(state, action) {
      return action.payload;
    },
  },
});

export const newLogin = (data) => {
  return async (dispatch) => {
    const user = await loginService.login(data);
    window.localStorage.setItem("loggedPiloto", JSON.stringify(user));

    dispatch(login(user));
  };
};

export const { login } = loginSlice.actions;
export default loginSlice.reducer;
