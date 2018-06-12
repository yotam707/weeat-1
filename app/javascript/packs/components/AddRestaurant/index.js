import React from 'react';
import styles from  './index.module.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AddRestaurantModal from './modal'
import { show } from 'redux-modal';

const AddRestaurant = ({ show }) =>
    <span>
        <button className={styles["add-restaurant"]} onClick={() => show('add-restaurant')}>
            <span>+</span>
        </button>
        <AddRestaurantModal name='add-restaurant'/>
    </span>

const mapDispatchToProps = (dispatch) => bindActionCreators({ show }, dispatch);

export default connect(null, mapDispatchToProps)(AddRestaurant);
