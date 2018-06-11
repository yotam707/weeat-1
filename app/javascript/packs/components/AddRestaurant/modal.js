import React, { Component } from 'react'
import styles from  './index.module.scss';
import PropTypes from 'prop-types'
import { Modal } from 'react-bootstrap'
import { connectModal } from 'redux-modal'
import AddRestaurantForm from './form'

class AddRestaurantModal extends Component {
    static propTypes = {
        handleHide: PropTypes.func.isRequired
    };

    render() {
        const { show, handleHide } = this.props;

        return (
            <Modal show={show} onHide={handleHide} dialogClassName={styles["modal-width"]}>
                <AddRestaurantForm hide={handleHide} />
            </Modal>
        );
    }
}

export default connectModal({ name: 'add-restaurant' })(AddRestaurantModal)
