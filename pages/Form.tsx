import React, { useEffect, useState } from "react";
import { View, Button, StyleSheet, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { updateInput, formSubmit } from "../redux/modules/formInput";
import { validateErrorField, validateAll } from "../helpers/validate";
import FormInput from "../components/FormInput";
import { getCountries } from "../helpers/countries";
import RNPickerSelect from "react-native-picker-select";

const lang = {
  placeholderSSN: "Personal identity number",
  ErrorSSN: "Not a correct personal identity number",
  placeholderPhoneNr: "Phone number",
  errorPhoneNr: "Not a correct phone number",
  placeholderEmail: "Email",
  errorEmail: "Not a correct email",
  errorCountry: "Select a country",
};

const Form = () => {
  const dispatch = useDispatch();
  const formInput = useSelector((state: any) => state.formInput);
  const formError = useSelector((state: any) => state.formError);
  const countriesList = useSelector(
    (state: any) => state.countriesList.countries
  );
  const updateFormInput = (fieldName: string, fieldValue: string) => {
    dispatch(updateInput(fieldName, fieldValue));
  };
  useState;
  useEffect(() => getCountries(dispatch), []);

  const updateCountry = (value: string) => {
    dispatch(updateInput("country", value));
    validateErrorField(dispatch, "country", value);
  };

  const submit = () => {
    validateErrorField(dispatch, "country", formInput.country);
    if (validateAll(formInput)) {
      console.log("Success");
      dispatch(formSubmit());
    }
  };
  return (
    <View style={styles.root}>
      <Text>
        <h2>React interview homework</h2>
      </Text>
      <FormInput
        name="ssn"
        placeholder={lang.placeholderSSN}
        value={formInput.ssn}
        error={formError.ssnError}
        errorText={lang.ErrorSSN}
        updateField={updateFormInput}
        validateField={validateErrorField}
      />
      <FormInput
        name="phoneNr"
        placeholder={lang.placeholderPhoneNr}
        value={formInput.phoneNr}
        error={formError.phoneNrError}
        errorText={lang.errorPhoneNr}
        updateField={updateFormInput}
        validateField={validateErrorField}
      />
      <FormInput
        name="email"
        placeholder={lang.placeholderEmail}
        value={formInput.email}
        error={formError.emailError}
        errorText={lang.errorEmail}
        updateField={updateFormInput}
        validateField={validateErrorField}
      />
      <View style={styles.picker}>
        <RNPickerSelect
          style={pickerSelectStyles}
          onValueChange={(value) => {
            updateCountry(value);
          }}
          value={formInput.country}
          items={countriesList}
        />
        {formError.countryError && (
          <Text style={styles.errorText}>{lang.errorCountry}</Text>
        )}
      </View>
      <Button onPress={() => submit()} title={"Submit"} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: "90%",
    justifyContent: "center",
  },
  picker: {
    paddingBottom: 10,
  },
  errorText: {
    paddingTop: 4,
    color: "red",
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    paddingHorizontal: 4,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "gray",
    borderRadius: 4,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

export default Form;
