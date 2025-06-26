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

export const initializeHoras = () => {
  return async (dispatch) => {
    const loggedPilotoJSON = window.localStorage.getItem("loggedPiloto");
    if (loggedPilotoJSON) {
      const piloto = JSON.parse(loggedPilotoJSON);
      const horas = await horasService.getAll(piloto.id);
      dispatch(setHoras(horas));
    } else {
      console.log({ error: "not pilot logged" });
    }
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
