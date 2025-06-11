import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../reducers/loginReducer";
import pilotosReducer from "../reducers/pilotoReducer";
import horasReducer from "../reducers/horasReducer";
import avionReducer from "../reducers/avionReducer";
import totalesReducer from "../reducers/totalesReducer";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    pilotos: pilotosReducer,
    horas: horasReducer,
    avion: avionReducer,
    totales: totalesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
