import { useDispatch } from "react-redux";
import { addCountries } from "../redux/modules/countriesList";

export const getCountries = (dispatch: Function) => {
  fetch("https://restcountries.eu/rest/v2/all", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((responseJson) => {
      const list = responseJson.map((e: any) => {
        return { label: e.name, value: e.name };
      });
      dispatch(addCountries(list));
    })
    .catch((error) => {
      console.error(error);
    });
};
