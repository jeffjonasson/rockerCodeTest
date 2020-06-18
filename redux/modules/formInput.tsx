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
  country: undefined,
};

export default function formReducer(state = initialState, action: any) {
  switch (action.type) {
    case FORM_SUBMIT:
      return initialState;
    case UPDATE_INPUT:
      return { ...state, ...{ [action.name]: action.value } };
    default:
      return state;
  }
}
