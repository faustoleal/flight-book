import { createSlice } from "@reduxjs/toolkit";
import avionesService from "../services/aviones";

const avionesSlice = createSlice({
  name: "aviones",
  initialState: [],
  reducers: {
    setAvion(state, action) {
      return action.payload;
    },
    appendAvion(state, action) {
      state.push(action.payload);
    },
  },
});

export const initializeAviones = () => {
  return async (dispatch) => {
    const aviones = await avionesService.getAll();
    dispatch(setAvion(aviones));
  };
};

export const createAvion = (avion) => {
  return async (dispatch) => {
    const newAvion = await avionesService.create(avion);
    dispatch(appendAvion(newAvion));
  };
};

export const { setAvion, appendAvion } = avionesSlice.actions;
export default avionesSlice.reducer;
