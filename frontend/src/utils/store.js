import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../reducers/loginReducer";
import pilotosReducer from "../reducers/pilotosReducer";
import horasReducer from "../reducers/horasReducer";
import avionesReducer from "../reducers/avionesReducer";
import totalesReducer from "../reducers/totalesReducer";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    pilotos: pilotosReducer,
    horas: horasReducer,
    aviones: avionesReducer,
    totales: totalesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
