import Button from '@components/Button/Button';
import style from '../../styles.module.scss';
import cls from 'classnames';
import React from 'react';

const CartSummary = () => {
    const {
        containerSummary,
        title,
        boxTotal,
        subTotal,
        price,
        total,
        empty,
        containerMethods,
        containerRight,
        titleMethods,
        boxImgMethods,
        imgMethods,
        textSecure,
    } = style;


    const srcMethods = [
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/visa.jpeg',
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/master-card.jpeg',
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/paypal.jpeg',
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/american-express.jpeg',
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/maestro.jpeg',
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/bitcoin.jpeg',
    ]

    return (
        <div className={containerRight}>
            <div className={containerSummary}>
                <div className={title}>CART TOTALS</div>

                <div className={cls(boxTotal, subTotal)}>
                    <div>Subtotal</div>
                    <div className={price}>$2,099,97</div>
                </div>

                <div className={cls(boxTotal, total)}>
                    <div>TOTAL</div>
                    <div>$2,099,97</div>
                </div>

                <Button content={'PROCEED TO CHECKOUT'} />
                <div className={empty}></div>
                <Button content={'CONTINUE SHOPPING'} isPriamry={false} />
            </div>

            <div className={containerMethods}>
                <div className={titleMethods}>
                    Guaranteed <span>safe</span> checkout
                </div>

                <div className={boxImgMethods}>
                   {
                    srcMethods.map((item, index) => (
                        <img
                        src={item}
                        alt='ảnh src'
                        className={imgMethods}
                        key={index}
                    />
                    ))
                   }
                </div>
            </div>

            <div className={textSecure}>
                Your payment is <span>100% Secure</span>
            </div>
        </div>
    );
};

export default CartSummary;
