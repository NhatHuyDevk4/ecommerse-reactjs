import React from 'react';
import styles from './styles.module.scss';

const Button = ({ content }) => {
    const { btn } = styles;
    return <div className={btn}>{content}</div>;
};

export default Button;
