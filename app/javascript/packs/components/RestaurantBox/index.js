import React from 'react';
import styles from  './index.module.scss';
import ReactStars from 'react-stars'
import translateCuisine from './translate-cuisine';

export default ({ name, cuisine, accepts_tenbis, rating}) =>
    <div className={styles["restaurant-box"]}>
        <span className={styles.cuisine}>{translateCuisine(cuisine)}</span>
        <div>
            <div className={styles.details}>
                <h4>{name}</h4>
                <div className={accepts_tenbis ? styles.tenbis : ''}/>
            </div>
            <div className={styles.rating}>
                <span>Rating:</span>
                <ReactStars count={3} value={Number(rating)} edit={false}/>
            </div>
        </div>
    </div>