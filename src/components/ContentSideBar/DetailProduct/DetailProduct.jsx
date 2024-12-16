import React, { useContext } from 'react';
import { SideBarContext } from '@/contexts/SideBarProvider';

import style from './styles.module.scss';
import SliderCommon from '@components/SliderCommon/SliderCommon';
import SelectBox from '@/pages/OurShop/Components/SelectBox';
import Button from '@components/Button/Button';
import { PiShoppingCart } from 'react-icons/pi';
import { TfiReload } from 'react-icons/tfi';
import { CiHeart } from 'react-icons/ci';

import { FaXTwitter } from 'react-icons/fa6';
import { FaFacebookF } from 'react-icons/fa6';
const DetailProduct = () => {
    const { detailProduct } = useContext(SideBarContext);

    console.log('detailProduct', detailProduct);

    const {
        container,
        title,
        price,
        desc,
        boxSize,
        boxItem,
        label,
        boxAddToCart,
        boxOr,
        line,
        or,
        boxAddOther,
        boxFooter
    } = style;

    const option = [
        { label: '1', value: 1 },
        { label: '2', value: 2 },
        { label: '3', value: 3 },
        { label: '4', value: 4 },
        { label: '5', value: 5 }
    ];

    return (
        <div className={container}>
            <SliderCommon data={detailProduct.images} />
            <div className={title}>{detailProduct.name}</div>
            <div className={price}>${detailProduct.price}</div>
            <div className={desc}>{detailProduct.description}</div>
            <div className={label}>Size</div>
            <div className={boxSize}>
                {detailProduct.size.map((item, index) => (
                    <div key={index} className={boxItem}>
                        {item.name}
                    </div>
                ))}
            </div>

            <div className={boxAddToCart}>
                <SelectBox options={option} />
                <div>
                    <Button
                        style={{ width: '190px' }}
                        content={
                            <>
                                <PiShoppingCart /> ADD TO CART
                            </>
                        }
                    />
                </div>
            </div>

            <div className={boxOr}>
                <div className={line} />
                <div className={or}>OR</div>
                <div className={line} />
            </div>

            <Button
                style={{ marginTop: '10px' }}
                content={
                    <>
                        <PiShoppingCart /> BUY NOW
                    </>
                }
            />

            <div className={boxAddOther}>
                <TfiReload style={{ fontSize: '18px' }} />
                <div> Add to compare</div>
            </div>

            <div className={boxAddOther}>
                <CiHeart style={{ fontSize: '20px' }} />
                <div>Add to wishlist</div>
            </div>

            <div className={boxFooter}>
                SKU: <span>12346</span>
            </div>
            <div className={boxFooter}>
                Category: <span>{detailProduct.category ? detailProduct.category : 'default'}</span>
            </div>
            <div className={boxFooter}>
                Estimated delivery: <span>3 - 5 days</span>
            </div>
            <div className={boxFooter}>
                Share: <span>
                    <FaXTwitter/>
                    <FaFacebookF/>
                </span>
            </div>
        </div>
    );
};

export default DetailProduct;
