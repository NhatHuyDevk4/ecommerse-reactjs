import React from 'react';
import style from '../../styles.module.scss';
import { FaRegTrashCan } from 'react-icons/fa6';
import SelectBox from '@/pages/OurShop/Components/SelectBox';
import LoadingCart from '../LoadingCart';

const CartTable = ({ listProductCart, getData, isLoading, getDataDelete }) => {
    const {
        cartTable,
        sizeProduct,
        sizeProduct__name,
        sizeProduct__value,
        nameProduct,
        productInfo,
        productSku,
        productPrice
    } = style;

    const showOptions = [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4', value: '4' },
        { label: '5', value: '5' },
        { label: '6', value: '6' },
        { label: '7', value: '7' }
    ];

    const handleDelete = (id) => {
        console.log(id);
    };

    const handleQuantityChange = (id, quantity) => {
        console.log(id, quantity);
    };

    const getValueSelect = (userId, productId, quantity, size) => {
        const data = {
            userId,
            productId,
            quantity,
            size,
            isMultiple: true
        };

        getData(data);
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
                        {listProductCart.map((item, index) => (
                            <tr key={index}>
                                <td>
                                    <img src={item.images[0]} alt={item.name} />
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
                                        <FaRegTrashCan
                                            onClick={() =>
                                                getDataDelete({
                                                    userId: item.userId,
                                                    productId: item.productId
                                                })
                                            }
                                            style={{
                                                cursor: 'pointer'
                                            }}
                                        />
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
                                        options={showOptions}
                                        getValue={(e) =>
                                            getValueSelect(
                                                item.userId,
                                                item.productId,
                                                e,
                                                item.size,
                                                item.quantity
                                            )
                                        }
                                        defaultValue={item.quantity}
                                    />
                                </td>
                                <td>
                                    <p className={productPrice}>
                                        ${item.total}
                                    </p>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {isLoading && <LoadingCart />}
            </div>
        </>
    );
};

export default CartTable;
