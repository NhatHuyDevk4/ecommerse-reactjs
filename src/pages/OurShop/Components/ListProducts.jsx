import React, { useContext } from 'react';
import { OurShopContext } from '@/contexts/OurShopProvider';
import MainLayout from '@components/Layout/Layout';
import ProductItem from '@components/ProductItem/ProductItem';
import styles from '../styles.module.scss';

const ListProducts = () => {

    const { products } = useContext(OurShopContext);

    const {containerProduct} = styles;
    // console.log('products', products);

    return (
        <>
            <MainLayout>
                <div className={containerProduct}>
                    {products.map((item) => (
                        <ProductItem
                            key={item.id}
                            src={item.images[0]}
                            prevSrc={item.images[1]}
                            name={item.name}
                            price={item.price}
                        />
                    ))}
                </div>
            </MainLayout>
        </>
    );
};

export default ListProducts;
