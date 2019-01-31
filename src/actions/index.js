import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const fetchData = () => {
  return {
    type: FETCH_DATA
  };
};

export const PENJUMLAHAN = "PENJUMLAHAN"; //var constant
export const hitungPenjumlahan = (angkaSatu, angkaDua) => {
  return {
    type: PENJUMLAHAN, //wajib
    payload: angkaSatu + angkaDua //optional
  };
};

const ApiUrlStarWars = "https://swapi.co/api/people/1/";
export const FETCH_DATA_STAR_WARS = "FETCH_DATA_STAR_WARS";
export const getDataStarWars = () => {
  return {
    type: FETCH_DATA_STAR_WARS,
    payload: requestDataStarWars()
  };
};

const requestDataStarWars = () => {
  return axios
    .get(ApiUrlStarWars)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
    });
};
