import { SubmissionError } from 'redux-form'
const RESTAURANTS_URL = `${window.location.origin}/api/v1/restaurants`;

export const UPDATE_RESTAURANTS = 'UPDATE_RESTAURANTS';
export const UPDATE_FILTERED_RESTAURANTS = 'UPDATE_FILTERED_RESTAURANTS';

const updateRestaurants = (restaurants) => ({ type: UPDATE_RESTAURANTS, restaurants });
const updateFilteredRestaurants = ({ filteredRestaurants, filters }) => ({ type: UPDATE_FILTERED_RESTAURANTS, filteredRestaurants, filters });

export const loadRestaurants = () => (dispatch) => fetch(RESTAURANTS_URL)
    .then(response => response.json())
    .then(restaurants => dispatch(updateRestaurants(restaurants)));

export const addRestaurant = (restaurant) => (dispatch, getState) => fetch(RESTAURANTS_URL,
    { body: JSON.stringify(restaurant), headers: { 'content-type': 'application/json' }, method: 'POST', mode: 'cors' })
    .then(response => response.ok ? undefined : response.json().then(err => {
        Object.keys(err).map(key => err[key] = err[key][0]);
        err._error = 'Failed adding restaurant';
        throw new SubmissionError(err);
    }));

export const filter = (filter) => (dispatch, getState) => {
    const { restaurants, filters } = getState().restaurants;
    const newFilters = Object.assign(filters, filter);

    let filtered = restaurants;
    if (newFilters.name) filtered = filtered.filter(({ name }) => name.startsWith(newFilters.name))
    if (newFilters.cuisine) filtered = filtered.filter(({ cuisine }) => cuisine === newFilters.cuisine)
    if (newFilters.rating) filtered = filtered.filter(({ rating }) => Number(rating) >= Number(newFilters.rating));
    if (newFilters.speed) filtered = filtered.filter(({ max_delivery_time }) => new Date(`2000-01-01T${newFilters.speed}:00.000`) < new Date(max_delivery_time))

    dispatch(updateFilteredRestaurants({ filteredRestaurants: filtered, filters: newFilters }))
};