import * as actions from '../actionTypes/HomeActionTypes';

/**
 * action dispatcher for loading of data
 */
export const flightsLoading = isLoading => {
  return {type: actions.FLIGHTS_LIST_LOADING, isLoading};
};
/**
 * action dispatcher for success of data
 */
export const flightsDataSuccess = data => {
  return {type: actions.FLIGHTS_LIST_SUCCESS, data};
};
/**
 * action dispatcher for error handling of data
 */
export const flightsDataError = error => {
  return {type: actions.FLIGHTS_LIST_FAILURE, error};
};
/**
 * action dispatcher for clearing the data
 */
export const clearFlightsData = () => {
  return {type: actions.CLEAR_FLIGHTS_LIST_DATA};
};
/**
 * action dispatcher for clearing api data
 */
export const clearApiData = () => {
  return {type: actions.CLEAR_API_DATA};
};

/**
 * action dispatcher for get the flights details
 */
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
