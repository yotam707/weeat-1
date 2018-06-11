import React from 'react';
import PropTypes from 'prop-types';
import RestaurantBox from '../RestaurantBox'
import styles from  './index.module.scss';

const RestaurantsList = (props) => (
    <div className={styles["restaurants-list"]}>
        { props.restaurants.map((restaurant, index) => (<RestaurantBox key={index} { ...restaurant } />)) }
    </div>
);

RestaurantsList.propTypes = {
    restaurants: PropTypes.array.isRequired
};

export default RestaurantsList;
