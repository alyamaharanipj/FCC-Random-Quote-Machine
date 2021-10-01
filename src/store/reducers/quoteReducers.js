import { FETCH_QUOTES_FAIL, FETCH_QUOTES_SUCCESS, RANDOM_QUOTE } from "../constants/quoteConstants";

const initialState = {
  loading: true,
  error: false,
  data: [],
  randomNumber: '',
  colors: [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857',
  ],
}

// eslint-disable-next-line import/no-anonymous-default-export
export const quoteReducers = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_QUOTES_SUCCESS: 
            return {
                ...state,
                loading: false,
                data: action.payload
            };
        case FETCH_QUOTES_FAIL: 
            return {
                ...state,
                loading: false,
                error: true
            };
        case RANDOM_QUOTE:
            return {
                ...state,
                randomNumber: action.payload
            };
        default:
            return state;
    }
};
