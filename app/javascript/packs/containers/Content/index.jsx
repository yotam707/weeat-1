import React, { Component } from 'react';
import RestaurantsList from '../../components/RestaurantsList/index';
import Map from '../../components/Map/index';
import styles from './index.module.scss';
import { connect } from 'react-redux';
import * as Actions from '../../actions';
import { bindActionCreators } from 'redux';

class Content extends Component {

    componentDidMount() {
        this.props.loadRestaurants();
    }

    render() {
        return (
            <div className={`${styles.content} containers`}>
                <RestaurantsList restaurants={this.props.restaurants}/>
                <Map/>
            </div>
        );
    }
}

const mapStateToProps = ({ restaurants }) => ({ restaurants: restaurants.filteredRestaurants });

const mapDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Content);