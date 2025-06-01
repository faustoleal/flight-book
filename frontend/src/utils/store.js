import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../reducers/loginReducer";
import pilotosReducer from "../reducers/pilotoReducer";
import horasReducer from "../reducers/horasReducer";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    pilotos: pilotosReducer,
    horas: horasReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
