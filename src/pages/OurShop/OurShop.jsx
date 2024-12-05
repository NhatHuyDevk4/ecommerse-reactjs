import MyHeader from '@components/Header/Header';
import MainLayout from '@components/Layout/Layout';
import React, { useContext } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import Banner from '@pages/OurShop/Components/Banner';
import { OurShopProvider } from '@contexts/OurShopProvider';
import Filter from '@pages/OurShop/Components/Filter';
import ListProducts from '@pages/OurShop/Components/ListProducts';


const OurShop = () => {
    const { container, functionBox, specialText, btnBack } = styles;

    const navigate = useNavigate();



    const handleBack = () => {
        navigate(-1);
    };

    return (
        // OurShopProvider chỉ dùng được cho các component con của OurShop
        <OurShopProvider>
            <MyHeader />
            <MainLayout>
                <div className={container}>
                    <div className={functionBox}>
                        <div>
                            Home &gt; <span className={specialText}>shop</span>
                        </div>
                        <div className={btnBack} onClick={handleBack}>
                            {' '}
                            &lt; Return to previous page{' '}
                        </div>
                    </div>
                </div>
                <Banner /> {/*  Banner sử dụng OurShopProvider */}
                <div>
                    <Filter />
                    <ListProducts />
                </div>
            </MainLayout>
        </OurShopProvider>
    );
};

export default OurShop;
