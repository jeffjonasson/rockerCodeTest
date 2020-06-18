import { purgeStoredState } from "redux-persist";
import { persistConfig } from "../configureStore";

const ADD_COUNTRIES = "ADD_COUNTRIES";

export const addCountries = (value: Array<any>) => ({
  type: ADD_COUNTRIES,
  value,
});

const initialState = {
  countries: [],
};

export default function countriesReducer(state = initialState, action: any) {
  switch (action.type) {
    case ADD_COUNTRIES:
      return { countries: action.value };
    default:
      return state;
  }
}
