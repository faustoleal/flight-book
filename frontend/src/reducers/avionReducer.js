import { createSlice } from "@reduxjs/toolkit";
import avionService from "../services/avion";

const avionSlice = createSlice({
  name: "avion",
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
    const aviones = await avionService.getAll();
    dispatch(setAvion(aviones));
  };
};

export const createAvion = (avion) => {
  return async (dispatch) => {
    const newAvion = avionService.create(avion);
    dispatch(appendAvion(newAvion));
  };
};

export const { setAvion, appendAvion } = avionSlice.actions;
export default avionSlice.reducer;
