import React from 'react'
import styles from  './index.module.scss';
import { Modal } from 'react-bootstrap'
import { connectModal } from 'redux-modal'
import AddRestaurantForm from './form'

const AddRestaurantModal = ({ handleHide, show}) => (
    <Modal show={show} onHide={handleHide} dialogClassName={styles["modal-width"]}>
        <AddRestaurantForm hide={handleHide} />
    </Modal>
);

export default connectModal({ name: 'add-restaurant' })(AddRestaurantModal)