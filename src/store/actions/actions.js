import * as actionTypes from './actionTypes';
import axios from 'axios';


export const fetchStart = () => {
    return {
        type: actionTypes.FETCH_START
    };
};

export const fetchSuccess = (location, forecast) => {
    return {
        type: actionTypes.FETCH_SUCCESS,
        location,
        forecast
    };
};

export const fetchFail = (error) => {
    return {
        type: actionTypes.FETCH_FAIL,
        error
    };
};

export const fetch = (city, days) => {
    return dispatch => {
        dispatch(fetchStart());
        axios.get("http://api.apixu.com/v1/forecast.json?key={your_api_key}&q=" + city + "&days=" + days)
            .then(response => {
                dispatch(fetchSuccess(response.data.location.name, response.data.forecast))
            })
            .catch(error => {
                dispatch(fetchFail(error.response.data.error.message))
            })
    };
};

