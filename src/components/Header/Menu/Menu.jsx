import styles from '../styles.module.scss';

import React from 'react';

const Menu = ({ content, href }) => {
    const { menu } = styles;

    return <div className={menu}>{content}</div>;
};

export default Menu;
