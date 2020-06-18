import { purgeStoredState } from "redux-persist";
import { persistConfig } from "../configureStore";

const UPDATE_INPUT = "UPDATE_INPUT";
const FORM_SUBMIT = "FORM_SUBMIT";

export const updateInput = (name: string, value: string) => ({
  type: UPDATE_INPUT,
  name,
  value,
});

export const formSubmit = () => ({
  type: FORM_SUBMIT,
});

const initialState = {
  ssn: "",
  phoneNr: "",
  email: "",
  country: "Select an item...",
};

export default function formReducer(state = initialState, action: any) {
  switch (action.type) {
    case FORM_SUBMIT:
      purgeStoredState(persistConfig);
      return initialState;
    case UPDATE_INPUT:
      return { ...state, ...{ [action.name]: action.value } };
    case FORM_SUBMIT:
      purgeStoredState(persistConfig);
      return state;
    default:
      return state;
  }
}
