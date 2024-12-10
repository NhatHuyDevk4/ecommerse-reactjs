import React, { useContext } from 'react';
import { SideBarContext } from '@/contexts/SideBarProvider';

import style from './styles.module.scss';
import SliderCommon from '@components/SliderCommon/SliderCommon';

const DetailProduct = () => {
    const { detailProduct } = useContext(SideBarContext);

    // console.log('detailProduct', detailProduct);

    const { container } = style;

    return (
        <div className={container}>
            <SliderCommon data={detailProduct.images} />
        </div>
    );
};

export default DetailProduct;
