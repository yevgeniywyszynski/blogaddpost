import React from 'react';
import {Outlet} from 'react-router-dom';
import styles from '../Layout/Layout.module.scss';
import Menu from '../Menu/Menu';

const Layout = () => {
    return(
        <div className={styles.layoutWrapper}>
            <div className={styles.titleWrapper}>
                <h2 className={styles.title}>Blog Front-end <span className={styles.ambulance}>Ambulance</span></h2>
            </div>
            <div className={styles.pageWrapper}>
                <Outlet />
                <div>
                    <Menu />
                </div>
            </div>
        </div>
    )
}
export default Layout;