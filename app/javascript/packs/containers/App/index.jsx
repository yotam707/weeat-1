import React from 'react';
import Header from '../Header';
import Filters from '../Filters';
import Content from '../Content';
import styles from  './index.module.scss';

export default () =>
    <div className={styles.app}>
        <Header />
        <Filters />
        <Content />
    </div>;