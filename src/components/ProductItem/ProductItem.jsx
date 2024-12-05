import styles from './styles.module.scss';
import reLoadIcon from '@icons/svgs/reloadIcon.svg';
import heartIcon from '@icons/svgs/heart.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';
import cls from 'classnames'; // này là thư viện giúp mình thêm class vào 1 element và thêm điều kiện vào class
import Button from '@components/Button/Button';
import { OurShopContext } from '@/contexts/OurShopProvider';
import { useContext, useEffect, useState } from 'react';

function ProductItem({
    src,
    prevSrc,
    name,
    price,
    details,
    isHomepage = true
}) {
    const {
        boxImg,
        showImgWhenHover,
        showFncWhenHover,
        boxIcon,
        title,
        priceCl,
        boxSize,
        size,
        textCenter,
        boxBtn,
        content,
        containerItem,
        leftBtn,
        largeImg,
        isActiveSize,
        btnClear
    } = styles;

    // const { isShowGrid } = useContext(OurShopContext);

    // console.log('isShowGrid', isShowGrid);

    const [sizeChoose, setSizeChoose] = useState('');

    const ourShopStore = useContext(OurShopContext);
    const [isShowGrid, setIsShowGrid] = useState(ourShopStore?.isShowGrid);

    const handleChooseSize = (size) => {
        console.log('size', size);
        setSizeChoose(size);
    };

    const handleClearSize = () => {
        setSizeChoose('');
    };

    useEffect(() => {
        if (isHomepage) {
            setIsShowGrid(true);
        } else {
            setIsShowGrid(ourShopStore?.isShowGrid);
        }
    }, [isHomepage, ourShopStore?.isShowGrid]);

    return (
        <div className={isShowGrid ? '' : containerItem}>
            <div className={cls(boxImg, { [largeImg]: !isShowGrid })}>
                <img src={src} alt='' />
                <img src={prevSrc} alt='' className={showImgWhenHover} />

                <div className={showFncWhenHover}>
                    <div className={boxIcon}>
                        <img src={cartIcon} alt='' />
                    </div>
                    <div className={boxIcon}>
                        <img src={heartIcon} alt='' />
                    </div>
                    <div className={boxIcon}>
                        <img src={reLoadIcon} alt='' />
                    </div>
                    <div className={boxIcon}>
                        <img src={cartIcon} alt='' />
                    </div>
                </div>
            </div>

            <div className={isShowGrid ? '' : content}>
                {!isHomepage && (
                    <div className={boxSize}>
                        {details.size.map((item, index) => (
                            <div
                                className={cls(size, {
                                    [isActiveSize]: item.name === sizeChoose // nếu item.name === sizeChoose thì thêm class isActiveSize vào
                                })}
                                key={index}
                                onClick={() => handleChooseSize(item.name)}
                            >
                                {item.name}
                            </div>
                        ))}
                    </div>
                )}

                {sizeChoose && (
                    <div className={btnClear} onClick={() => handleClearSize()}>
                        clear
                    </div>
                )}

                <div
                    className={cls(title, {
                        [textCenter]: !isHomepage
                    })}
                >
                    {name}
                </div>

                {!isHomepage && (
                    <div
                        className={cls(textCenter)}
                        style={{
                            color: '#888'
                        }}
                    >
                        Brand 01
                    </div>
                )}

                <div
                    className={cls(priceCl, { [textCenter]: !isHomepage })}
                    style={{
                        color: isHomepage ? '#333' : '#888'
                    }}
                >
                    {price}$
                </div>

                {!isHomepage && (
                    <div className={cls(boxBtn, { [leftBtn]: !isHomepage })}>
                        <Button content={'ADD TO CART'} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductItem;
