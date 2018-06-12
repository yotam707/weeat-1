import React from 'react';
import RestaurantBox from '../RestaurantBox'
import styles from  './index.module.scss';

export default ({ restaurants }) =>
    <div className={styles["restaurants-list"]}>
        { restaurants.map((restaurant, index) => (<RestaurantBox key={index} { ...restaurant } />)) }
    </div>