import React, { useContext } from 'react';
import { OurShopContext } from '@/contexts/OurShopProvider';
import MainLayout from '@components/Layout/Layout';
import ProductItem from '@components/ProductItem/ProductItem';
import styles from '../styles.module.scss';
import Button from '@components/Button/Button';

const ListProducts = () => {
    const { products, isShowGrid, isLoading } = useContext(OurShopContext);

    const { containerProduct } = styles;
    // console.log('products', products);

    return (
        <>
            <MainLayout>
                {isLoading ? (
                    <>
                    Loading.......
                    </>
                ) : (
                    <>
                        <div className={isShowGrid ? containerProduct : ''}>
                            {products.map((item) => (
                                <ProductItem
                                    key={item.id}
                                    src={item.images[0]}
                                    prevSrc={item.images[1]}
                                    name={item.name}
                                    price={item.price}
                                    details={item}
                                    isHomepage={false}
                                />
                            ))}
                        </div>

                        <div style={{
                            width: '180px'
                        }}>
                            <Button content={'LOAD MORE PRODUCT'} />
                        </div>
                    </>
                )}
            </MainLayout>
        </>
    );
};

export default ListProducts;
