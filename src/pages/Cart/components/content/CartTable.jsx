import React from 'react';
import style from '../../styles.module.scss';
import { FaRegTrashCan } from 'react-icons/fa6';
import SelectBox from '@/pages/OurShop/Components/SelectBox';
import Button from '@components/Button/Button';

const CartTable = () => {
    const {
        cartTable,
        sizeProduct,
        sizeProduct__name,
        sizeProduct__value,
        nameProduct,
        productInfo,
        productSku,
        productPrice,
        fotterContent,
        couponCode,
        btnFotterContent
    } = style;

    const CartItem = [
        {
            id: 1,
            name: 'Product 1Consectetur nibh at',
            price: 100,
            sku: 543534,
            size: 'M',
            quantity: 1,
            image: 'https://via.placeholder.com/150'
        }
    ];

    const optionSelect = [
        {
            label: 1,
            value: 1
        },
        {
            label: 2,
            value: 2
        },
        {
            label: 3,
            value: 3
        }
    ];

    const handleDelete = (id) => {
        console.log(id);
    };

    const handleQuantityChange = (id, quantity) => {
        console.log(id, quantity);
    };

    return (
        <>
            <div className={cartTable}>
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Sku</th>
                            <th>Quantity</th>
                            <th>SubTotal</th>
                        </tr>
                    </thead>

                    <tbody>
                        {CartItem.map((item) => (
                            <tr key={item.id}>
                                <td>
                                    <img
                                        src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-2.1-min-285x340.jpg'
                                        alt={item.name}
                                    />
                                    <div className={productInfo}>
                                        <div className={nameProduct}>
                                            {item.name}
                                        </div>
                                        <div className={sizeProduct}>
                                            <div className={sizeProduct__name}>
                                                Size:{' '}
                                                <span
                                                    className={
                                                        sizeProduct__value
                                                    }
                                                >
                                                    {item.size}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <td>
                                        <FaRegTrashCan onClick={handleDelete} />
                                    </td>
                                </td>
                                <td>
                                    <p>${item.price}</p>
                                </td>
                                <td>
                                    <p className={productSku}>${item.sku}</p>
                                </td>
                                <td>
                                    <SelectBox
                                        options={optionSelect}
                                        getValue={handleDelete}
                                    />
                                </td>
                                <td>
                                    <p className={productPrice}>
                                        ${item.price}
                                    </p>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className={fotterContent}>
                <div className={couponCode}>
                    <input type='text' placeholder='Coupon Code' />
                    <Button
                        content={'OK'}
                        isPriamry={false}
                        style={{ width: '36px', height: '36.99px', borderRadius: '0' }}
                    />
                </div>

                <div className={btnFotterContent}>
                    <Button
                        content={
                            <>
                                <FaRegTrashCan /> Clear Shopping Cart
                            </>
                        }
                        isPriamry={false}
                        style={{
                            width: '100%',
                            height: '34px',
                            padding: '10.5px 34.5px'
                        }}
                    />
                </div>
            </div>
        </>
    );
};

export default CartTable;
