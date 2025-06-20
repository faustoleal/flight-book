import { createSlice } from "@reduxjs/toolkit";
import pilotosService from "../services/pilotos";

const pilotosSlice = createSlice({
  name: "pilotos",
  initialState: [],
  reducers: {
    setPiloto(state, action) {
      return action.payload;
    },
    appendPiloto(state, action) {
      state.push(action.payload);
    },
  },
});

export const initializePilotos = () => {
  return async (dispatch) => {
    const pilotos = await pilotosService.getAll();
    dispatch(setPiloto(pilotos));
  };
};

export const createPiloto = (piloto) => {
  return async (dispatch) => {
    const newPiloto = await pilotosService.create(piloto);
    dispatch(appendPiloto(newPiloto));
  };
};

export const { setPiloto, appendPiloto } = pilotosSlice.actions;
export default pilotosSlice.reducer;
