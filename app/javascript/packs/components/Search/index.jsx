import React from 'react';
import styles from  './index.module.scss';
import { connect } from 'react-redux';
import * as Actions from "../../actions";
import { bindActionCreators } from 'redux';

const Search = ({ filter }) =>
    <input
        className={styles.search}
        type="text"
        placeholder="🔍 Find a restaurant"
        onChange={e => filter({ name: e.target.value })}
    />

const mapDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch);

export default connect(null, mapDispatchToProps)(Search);