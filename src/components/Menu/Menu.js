import React from 'react';
import styles from '../Menu/Menu.module.scss';
import {Link} from 'react-router-dom';

const Menu = () => {
    return(
        <div className={styles.menuWrapper}>
            <Link className={styles.menu} to="/"> Posty</Link>
            <Link className={styles.menu} to="add-post"> Dodaj Post</Link>
            <Link className={styles.menu} to="settings"> Ustawienia</Link>
        </div>
    )
}

export default Menu;