import { purgeStoredState } from "redux-persist";
import { persistConfig } from "../configureStore";

const UPDATE_ERROR = "UPDATE_ERROR";

export const updateError = (error: string, value: boolean) => ({
  type: UPDATE_ERROR,
  error,
  value,
});

const initialState = {
  ssnError: false,
  phoneNrError: false,
  emailError: false,
  countryError: false,
};

export default function errorReducer(state = initialState, action: any) {
  switch (action.type) {
    case UPDATE_ERROR:
      return { ...state, ...{ [action.error]: action.value } };
    default:
      return state;
  }
}
