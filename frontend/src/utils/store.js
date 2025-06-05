import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../reducers/loginReducer";
import pilotosReducer from "../reducers/pilotoReducer";
import horasReducer from "../reducers/horasReducer";
import avionReducer from "../reducers/avionReducer";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    pilotos: pilotosReducer,
    horas: horasReducer,
    avion: avionReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
