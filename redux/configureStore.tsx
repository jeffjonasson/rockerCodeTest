import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";
import formInput from "./modules/formInput";
import formError from "./modules/formError";
import countriesList from "./modules/countriesList";

const reducer = combineReducers({
  formInput,
  formError,
  countriesList,
});

export const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer);
let persistor = persistStore(store);

export { store, persistor };
