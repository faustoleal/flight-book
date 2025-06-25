import { createSlice } from "@reduxjs/toolkit";
import horasService from "../services/horas";

const totalesSlice = createSlice({
  name: "totales",
  initialState: null,
  reducers: {
    setTotales(state, action) {
      return action.payload;
    },
  },
});

export const initializeTotales = (id) => {
  return async (dispatch) => {
    const total = await horasService.getTotales(id);
    dispatch(setTotales(total));
  };
};

export const { setTotales } = totalesSlice.actions;
export default totalesSlice.reducer;
