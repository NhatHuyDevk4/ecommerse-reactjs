import React from 'react';
import style from '../../styles.module.scss';
import CartTable from './CartTable';
import CartSummary from './CartSummary';

const Content = () => {
    const { containerContents } = style;

    return (
        <div className={containerContents}>
            <div>
                <CartTable />
            </div>
           
                <CartSummary />
           
        </div>
    );
};

export default Content;
