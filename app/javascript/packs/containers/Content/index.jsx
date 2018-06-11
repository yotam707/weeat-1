import React from 'react';
import RestaurantsList from '../../components/RestaurantsList/index';
import Map from '../../components/Map/index';
import styles from './index.module.scss';

const Content = (props) => (
    <div className={`${styles.content} containers`}>
        <RestaurantsList restaurants={props.restaurants}/>
        <Map />
    </div>
);

export default Content;
