import MainLayout from '@components/Layout/Layout';
import CountdownBanner from '@components/CountdownBanner/CountdownBanner';
import styles from './styles.module.scss';
import ProductItem from '@components/ProductItem/ProductItem';

function ProductListWithHeading({ data }) {
    // Using the full styles object directly in the JSX for clarity

    return (
        <MainLayout>
            <div className={styles.container}>
                <CountdownBanner />
                <div className={styles.containerItem}>
                    {data.map((item, index) => {
                        if (!item.id) {
                            // console.error(`Item at index ${index} is missing an id.`);
                            return null;
                        }
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

export default ProductListWithHeading;
