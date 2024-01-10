import * as actions from '../actionTypes/HomeActionTypes';

export const flightsLoading = isLoading => {
  return {type: actions.FLIGHTS_LIST_LOADING, isLoading};
};
export const flightsDataSuccess = data => {
  return {type: actions.FLIGHTS_LIST_SUCCESS, data};
};
export const flightsDataError = error => {
  return {type: actions.FLIGHTS_LIST_FAILURE, error};
};
export const clearFlightsData = () => {
  return {type: actions.CLEAR_FLIGHTS_LIST_DATA};
};
export const bookFlight = id => {
  return {type: actions.BOOK, id};
};
export const clearApiData = () => {
  return {type: actions.CLEAR_API_DATA};
};

export const getFlightsData = () => {
  return dispatch => {
    dispatch(flightsLoading(true));
    fetch('https://api.npoint.io/4829d4ab0e96bfab50e7')
      .then(res => res.json())
      .then(response => {
        dispatch(flightsDataSuccess(response));
      })
      .catch(err => {
        dispatch(flightsDataError(err));
      });
  };
};
