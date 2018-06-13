import React from 'react';
import Search from '../../components/Search/index';
import AddRestaurant from '../../components/AddRestaurant';
import styles from './index.module.scss';

export default () =>
    <div className={`containers ${styles.header}`}>
        <h1>WeEat</h1>
        <h3>It's 12:00 and you're hungry.</h3>
        <Search />
        <AddRestaurant/>
    </div>