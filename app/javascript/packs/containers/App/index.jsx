import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions';
import Header from '../Header';
import Filters from '../Filters';
import Content from '../Content';
import styles from  './index.module.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.actions.loadRestaurants();
    }

    render() {
        return (
            <div className={styles.app}>
                <Header filter={this.props.actions.filterByNameRestaurants}/>
                <Filters />
                <Content restaurants={this.props.restaurants} />
            </div>
        );
    }
}

const mapStateToProps = ({ restaurants }) => {
    return ({
        restaurants: restaurants.filteredRestaurants
    });
}

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(Actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);