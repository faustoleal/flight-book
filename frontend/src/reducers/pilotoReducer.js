import { createSlice } from "@reduxjs/toolkit";
import pilotoService from "../services/piloto";

const pilotoSlice = createSlice({
  name: "piloto",
  initialState: [],
  reducers: {
    setPiloto(state, action) {
      return action.payload;
    },
    appendPiloto(state, action) {
      return state.push(action.payload);
    },
  },
});

export const initializePilotos = () => {
  return async (dispatch) => {
    const pilotos = await pilotoService.getAll();
    dispatch(setPiloto(pilotos));
  };
};

export const createPiloto = (piloto) => {
  return async (dispatch) => {
    const newPiloto = await pilotoService.create(piloto);
    dispatch(appendPiloto(newPiloto));
  };
};

export const { setPiloto, appendPiloto } = pilotoSlice.actions;
export default pilotoSlice.reducer;
