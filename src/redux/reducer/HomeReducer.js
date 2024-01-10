import {
  CLEAR_API_DATA,
  CLEAR_FLIGHTS_LIST_DATA,
  FLIGHTS_LIST_LOADING,
  FLIGHTS_LIST_FAILURE,
  FLIGHTS_LIST_SUCCESS,
  BOOK,
} from '../actionTypes/HomeActionTypes';

export const initialState = {
  isSuccess: false,
  isError: false,
  isLoading: false,
  flightsList: undefined,
  errorData: undefined,
  bookings: [],
};

const flightsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FLIGHTS_LIST_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case FLIGHTS_LIST_SUCCESS:
      return {
        ...state,
        isSuccess: true,
        flightsList: action.data,
      };
    case FLIGHTS_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorData: action.err,
      };
    case CLEAR_FLIGHTS_LIST_DATA:
      return {
        ...initialState,
      };
    case BOOK:
      return {
        ...state,
        bookings: [...initialState.bookings, action.id],
      };
    case CLEAR_API_DATA:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: false,
      };
    default:
      return state;
  }
};

export default flightsReducer;
