import React from 'react'
import { Field, reduxForm } from 'redux-form'
import styles from  './index.module.scss';
import * as Actions from "../../actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const AddRestaurantForm = props => {
    const { error, handleSubmit, pristine, submitting, hide, addRestaurant, loadRestaurants } = props;

    const submit = (restaurant) => addRestaurant({ restaurant }).then(loadRestaurants).then(hide);

    return (
        <form onSubmit={handleSubmit(submit)}>
            <h2>Add Restaurant</h2>
            <div>
                <label>Restaurant Name</label>
                <div>
                    <Field name="name" component="input" type="text" placeholder="Name..." className={styles["form-input"]}/>
                </div>
            </div>
            <div>
                <label>Cuisine Type</label>
                <div>
                    <Field name="cuisine" component="select" className={styles["form-input"]}>
                        <option>Choose one...</option>
                        <option value="Asian">Asian</option>
                        <option value="hamburger">Hamburger</option>
                        <option value="cafe">Cafe</option>
                        <option value="dessert">Dessert</option>
                        <option value="italian">Italian</option>
                        <option value="fish">Fish</option>
                        <option value="vegetarian">Vegetarian</option>
                        <option value="chinese">Chinese</option>
                    </Field>
                </div>
            </div>
            <div>
                <label>Rating</label>
                <div>
                    <Field name="rating" component="select" className={styles["form-input"]}>
                        <option>Chose one...</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </Field>
                </div>
            </div>
            <div>
                <label>Speed</label>
                <div>
                    <Field name="max_delivery_time" component="select" className={styles["form-input"]}>
                        <option>Chose one...</option>
                        <option value="13:00">13:00</option>
                        <option value="13:30">13:30</option>
                        <option value="14:00">14:00</option>
                    </Field>
                </div>
            </div>
            <div className={styles["form-checkbox"]}>
                <label htmlFor="accepts_tenbis" className={styles["checkbox"]}>Accepts 10Bis
                    <Field name="accepts_tenbis" id="accepts_tenbis" component="input" type="checkbox" checked={true}/>
                    <span className={styles.checkmark}></span>
                </label>
            </div>
            <div>
                {error}
            </div>
            <div>
                <button type="submit" disabled={pristine || submitting}>Save</button>
            </div>
        </form>
    )
}

const mapDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch);

export default connect(null, mapDispatchToProps)
    (reduxForm({ form: 'addRestaurant', initialValues: { accepts_tenbis: true } })
    (AddRestaurantForm))

