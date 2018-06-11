import React from 'react';
import styles from  './index.module.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { show } from 'redux-modal'
import AddRestaurantModal from './modal'

class AddRestaurant extends React.Component {
    render() {
        // this.props.show('add-restaurant')
        return (
            <span>
                <button className={styles["add-restaurant"]}
                        onClick={() => this.props.show('add-restaurant')}>
                    <span>+</span>
                </button>
                <AddRestaurantModal name='add-restaurant'/>
            </span>
        );
    }
}

export default connect(
    null,
    dispatch => bindActionCreators({ show }, dispatch)
)(AddRestaurant)
