import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const intialState = {
    data: '',
    showgraph: false,
    location: '',
    loading: false,
    error: ''
};

const reducer = (state = intialState, action) => {
    switch(action.type){
        case (actionTypes.FETCH_START):
            return updateObject(state, { loading: true, showgraph: false, error: ''});
        case (actionTypes.FETCH_SUCCESS):
            return updateObject(state, { loading: false, data: Object.values(action["forecast"]), location: action.location, showgraph: true, error: ''});
        case (actionTypes.FETCH_FAIL):
            return updateObject(state, {loading: false, error: action.error, showgraph: false, data: ''});
        default:
            return state
    }
}

export default reducer;