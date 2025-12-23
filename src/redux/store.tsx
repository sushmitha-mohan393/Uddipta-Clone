
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "../redux/authSlice"
import onboardingReducer from "../redux/OnboardingSlice";
import darkModeReducer from "../redux/DarkModeSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["auth","onboarding","darkMode"], 
};


const rootReducer = combineReducers({
  auth : authReducer,
  onboarding:onboardingReducer,
  darkMode:darkModeReducer
});


const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }),
});


export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
