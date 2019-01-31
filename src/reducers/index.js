import { combineReducers } from "redux";
import { PENDING, FULFILLED, REJECTED } from "redux-promise-middleware";
import {
  FETCH_DATA,
  PENJUMLAHAN,
  FETCH_DATA_STAR_WARS
} from "../actions/index";

const dataStarWars = (
  state = {
    isFetching: false,
    data: {},
    message: ""
  },
  action
) => {
  switch (action.type) {
    case `${FETCH_DATA_STAR_WARS}_PENDING`:
      return {
        ...state,
        isFetching: true,
        message: "Pending"
      };
    case `${FETCH_DATA_STAR_WARS}_FULFILLED`:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
        message: "Success"
      };

    case `${FETCH_DATA_STAR_WARS}_REJECTED`:
      return {
        ...state,
        isFetching: false,
        message: "Error"
      };

    default:
      return state;
  }
};

export const dataPenjumlahan = (
  state = {
    hasil: 0
  },
  action
) => {
  switch (action.type) {
    case `${PENJUMLAHAN}`:
      return {
        ...state,
        hasil: action.payload
      };

    default:
      return state;
  }
};

export const data = (
  state = {
    items: "",
    status: false
  },
  action
) => {
  switch (action.type) {
    case `${FETCH_DATA}`:
      return {
        ...state,
        items: "This is data from redux",
        status: true
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  data,
  dataPenjumlahan,
  dataStarWars
});

export default rootReducer;
