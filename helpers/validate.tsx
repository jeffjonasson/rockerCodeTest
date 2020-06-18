import { updateError } from "../redux/modules/formError";
import Personnummer from "personnummer";
import { validator } from "telefonnummer";

interface FormInput {
  ssn: string;
  phoneNr: string;
  email: string;
  country: string;
}

export const validSSN = (ssn: string): boolean => {
  return Personnummer.valid(ssn);
};

export const validPhoneNr = (phoneNr: string): boolean => {
  return validator(phoneNr);
};

export const validEmail = (email: string): boolean => {
  const re = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const validCountry = (country: string) => {
  const notValid =
    country === "" || country === "Select an item..." || country === undefined;
  return !notValid;
};

export const validateErrorField = (
  dispatch: Function,
  field: string,
  value: string
): void => {
  switch (field) {
    case "ssn":
      dispatch(updateError("ssnError", !validSSN(value)));
      break;
    case "phoneNr":
      dispatch(updateError("phoneNrError", !validPhoneNr(value)));
      break;
    case "email":
      dispatch(updateError("emailError", !validEmail(value)));
      break;
    case "country":
      dispatch(updateError("countryError", !validCountry(value)));
      break;
    default:
      break;
  }
};

export const validateAll = (formInput: FormInput) => {
  return (
    validSSN(formInput.ssn) &&
    validPhoneNr(formInput.phoneNr) &&
    validEmail(formInput.email) &&
    validCountry(formInput.country)
  );
};
