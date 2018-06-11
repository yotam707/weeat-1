import React from 'react';
import styles from './index.module.scss';
import { connect } from 'react-redux';
import * as Actions from "../../actions";
import { bindActionCreators } from 'redux';

class Filters extends React.Component {
    render() {
        return (
            <div className={`containers ${styles.filters}`}>
                <div className={styles.filters}>
                    <div className={styles["filter"]}>
                        <label>Cuisine</label>
                        <select className={styles.filter} onChange={e => this.props.actions.filterByCuisineRestaurants(e.target.value)}>
                            <option>Hamburger, Asian, Salads...</option>
                            <option value="Asian">Asian</option>
                            <option value="hamburger">Hamburger</option>
                            <option value="cafe">Cafe</option>
                            <option value="dessert">Dessert</option>
                            <option value="italian">Italian</option>
                            <option value="fish">Fish</option>
                            <option value="vegetarian">Vegetarian</option>
                            <option value="chinese">Chinese</option>
                        </select>
                    </div>
                    <div className={styles["filter"]}>
                        <label>Rating</label>
                        <select name="rating" className={styles.filter} onChange={e => this.props.actions.filterByRatingRestaurants(e.target.value)}>
                            <option>How many stars...</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div className={styles["filter"]}>
                        <label>Speed</label>
                        <select name="speed" className={styles.filter} onChange={e => this.props.actions.filterBySpeedRestaurants(e.target.value)}>
                            <option>How long will it be...</option>
                            <option value="13:00">13:00</option>
                            <option value="13:30">13:30</option>
                            <option value="14:00">14:00</option>
                        </select>
                    </div>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(Actions, dispatch)
});

export default connect(null, mapDispatchToProps)(Filters);
