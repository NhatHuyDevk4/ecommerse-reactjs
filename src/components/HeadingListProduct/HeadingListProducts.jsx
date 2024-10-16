import MainLayout from '@components/Layout/Layout';
import CountdownBanner from '@components/CountdownBanner/CountdownBanner';
import styles from './styles.module.scss';
import ProductItem from '@components/ProductItem/ProductItem';

function HeadingListProducts({ data }) {
    const { container, containerItem } = styles;

    return (
        <MainLayout>
            <div className={container}>
                <CountdownBanner />
                <div className={containerItem}>
                    {data.map((item) => {
                        return (
                            <ProductItem
                                key={item.id}
                                src={item.images[0]}
                                prevSrc={item.images[1]}
                                name={item.name}
                                price={item.price}
                            />
                        );
                    })}
                </div>
            </div>
        </MainLayout>
    );
}

export default HeadingListProducts;