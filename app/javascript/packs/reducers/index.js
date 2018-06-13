import { combineReducers } from 'redux';
import { reducer as modal } from 'redux-modal'
import { reducer as form } from 'redux-form';

import {
    UPDATE_RESTAURANTS,
    UPDATE_FILTERED_RESTAURANTS,
} from '../actions';

const initialState = {
    restaurants: [],
    filteredRestaurants: [],
    filters: {}
};

const restaurants = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_RESTAURANTS:
            return {
                ...state,
                restaurants: action.restaurants,
                filteredRestaurants: action.restaurants,
            };
        case UPDATE_FILTERED_RESTAURANTS:
            return {
                ...state,
                filteredRestaurants: action.filteredRestaurants
            };
        default:
            return state;
    }
};

export default combineReducers({ modal, form, restaurants });