import { SubmissionError } from 'redux-form'

const BASE_URL = 'http://localhost:3000/api/v1';
const RESTAURANTS_URL = `${BASE_URL}/restaurants`;

export const UPDATE_RESTAURANTS = 'UPDATE_RESTAURANTS';
export const UPDATE_FILTERED_RESTAURANTS = 'UPDATE_FILTERED_RESTAURANTS';

const updateRestaurants = (restaurants) => ({ type: UPDATE_RESTAURANTS, restaurants });
const updateFilteredRestaurants = ({ filteredRestaurants, filters }) => ({ type: UPDATE_FILTERED_RESTAURANTS, filteredRestaurants, filters });

const filterRestaurants = ({ restaurants, filters }) => {
    let filtered = restaurants;
    if (filters.name) filtered = filtered.filter(({ name }) => name.startsWith(filters.name))
    if (filters.cuisine) filtered = filtered.filter(({ cuisine }) => cuisine === filters.cuisine)
    if (filters.rating) filtered = filtered.filter(({ rating }) => Number(rating) >= Number(filters.rating));
    if (filters.speed) filtered = filtered.filter(({ max_delivery_time }) => new Date(`2000-01-01T${filters.speed}:00.000`) < new Date(max_delivery_time))
    return filtered;
}

export const loadRestaurants = () => (dispatch, getState) => fetch(`${RESTAURANTS_URL}`)
    .then(response => response.json())
    .then(restaurants => dispatch(updateRestaurants(restaurants)));

export const addRestaurant = (restaurant) => (dispatch, getState) => fetch(`${RESTAURANTS_URL}`,
    { body: JSON.stringify(restaurant), headers: { 'content-type': 'application/json' }, method: 'POST', mode: 'cors' })
    .then(response => response.ok ? undefined : response.json().then(err => {
        Object.keys(err).map(key => err[key] = err[key][0]);
        err._error = 'Failed adding restaurant';
        throw new SubmissionError(err);
    }));

export const filterByNameRestaurants = (name) => (dispatch, getState) => {
    const { restaurants, filters } = getState();
    Object.assign(filters, { name });
    dispatch(updateFilteredRestaurants({ filteredRestaurants: filterRestaurants({ restaurants, filters }), filters }))
}

export const filterByCuisineRestaurants = (cuisine) => (dispatch, getState) => {
    const { restaurants, filters } = getState();
    Object.assign(filters, { cuisine });
    dispatch(updateFilteredRestaurants({ filteredRestaurants: filterRestaurants({ restaurants, filters }), filters }))
}

export const filterByRatingRestaurants = (rating) => (dispatch, getState) => {
    const { restaurants, filters } = getState();
    Object.assign(filters, { rating });
    dispatch(updateFilteredRestaurants({ filteredRestaurants: filterRestaurants({ restaurants, filters }), filters }))
}

export const filterBySpeedRestaurants = (speed) => (dispatch, getState) => {
    const { restaurants, filters } = getState();
    Object.assign(filters, { speed });
    dispatch(updateFilteredRestaurants({ filteredRestaurants: filterRestaurants({ restaurants, filters }), filters }))
}