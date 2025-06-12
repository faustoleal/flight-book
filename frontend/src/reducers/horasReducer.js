import { createSlice } from "@reduxjs/toolkit";
import horasService from "../services/horas";

const horasSlice = createSlice({
  name: "horas",
  initialState: [],
  reducers: {
    appendHoras(state, action) {
      state.push(action.payload);
    },
    setHoras(state, action) {
      return action.payload;
    },
  },
});

export const initializeHoras = (id) => {
  return async (dispatch) => {
    const horas = await horasService.getAll(id);
    dispatch(setHoras(horas));
  };
};

export const createHoras = (hora) => {
  return async (dispatch) => {
    const newHora = await horasService.create(hora);
    dispatch(appendHoras(newHora));
  };
};

export const { setHoras, appendHoras } = horasSlice.actions;
export default horasSlice.reducer;
