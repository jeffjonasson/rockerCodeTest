import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { useDispatch } from "react-redux";

interface Props {
  name: string;
  value: string;
  placeholder: string;
  error: string;
  errorText: string;
  updateField(fieldName: string, fieldValue: string): void;
  validateField(dispatch: Function, field: string, value: string): void;
}

const FormInput = ({
  name,
  value,
  placeholder,
  error,
  errorText,
  updateField,
  validateField,
}: Props) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.inputWrapper}>
      <TextInput
        placeholder={placeholder}
        onChangeText={(value) => updateField(name, value)}
        onBlur={() => validateField(dispatch, name, value)}
        style={[
          styles.input,
          error ? styles.textInputInvalid : styles.textInputValid,
        ]}
        value={value}
      />
      {error && <Text style={styles.errorText}>{errorText}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    marginBottom: 8,
  },
  input: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
  },
  textInputValid: {
    borderColor: "grey",
  },
  textInputInvalid: {
    borderColor: "red",
  },
  errorText: {
    paddingTop: 4,
    color: "red",
  },
});

export default FormInput;
