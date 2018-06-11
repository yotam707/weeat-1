import React from 'react';
import styles from  './index.module.scss';
import { connect } from 'react-redux';
import * as Actions from "../../actions";
import { bindActionCreators } from 'redux';

class Search extends React.Component {
    render() {
        return (
            <input
                className={styles.search}
                type="text"
                placeholder="🔍 Find a restaurant"
                onChange={e => this.props.actions.filterByNameRestaurants(e.target.value)}
            />
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(Actions, dispatch)
});

export default connect(null, mapDispatchToProps)(Search);