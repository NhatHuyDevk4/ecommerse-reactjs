import Button from '@components/Button/Button';
import styles from './styles.module.scss';
import useTranslateXImage from '@/hooks/useTranslateXImage';
import { useEffect, useRef, useState } from 'react';

const SaleHomepage = () => {
    const { container, title, des, boxBtn, boxImage } = styles;

    // const [scrollDriction, setScrollDrection] = useState(null);

    // const previousScrollPosition = useRef(0);

    // //fix cứng ảnh khi scroll
    // const [translateXPosition, setTranslateXPosition] = useState(80);

    // // lưu trử lại vị trí hiện tại scroll
    // const [scrollPosition, setScrollPosition] = useState(0);

    // const scrollTracking = () => {
    //     const currentScrollPosition = window.pageYOffset;

    //     if (currentScrollPosition > previousScrollPosition.current) {
    //         setScrollDrection('down');
    //     } else if (currentScrollPosition < previousScrollPosition.current) {
    //         setScrollDrection('up');
    //     }

    //     previousScrollPosition.current =
    //         currentScrollPosition <= 0 ? 0 : currentScrollPosition;

    //     setScrollPosition(currentScrollPosition);
    // };

    // const handleTranslateX = () => {
    //     if (scrollDriction === 'down' && scrollPosition >= 1500) {
    //         setTranslateXPosition(
    //             translateXPosition <= 0 ? 0 : translateXPosition - 1
    //         );
    //     } else if (scrollDriction === 'up') {
    //         setTranslateXPosition(
    //             translateXPosition >= 80 ? 80 : translateXPosition + 1
    //         );
    //     }
    // };

    // useEffect(() => {
    //     window.addEventListener('scroll', scrollTracking);

    //     return () => window.removeEventListener('scroll', scrollTracking); // để dọn dẹp tai nguyên bọ trớ tránh rò rỉ tài nguyên bộ nhớ
    // }, []);

    // useEffect(() => {
    //     handleTranslateX();
    // }, [scrollPosition]);

    // console.log(scrollPosition);

    const { translateXPosition } = useTranslateXImage();

    return (
        <div className={container}>
            <div
                className={boxImage}
                style={{
                    transform: `translateX(${translateXPosition}px)`,
                    transition: `transform 0.6s ease`
                }}
            >
                <img
                    src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_1.jpeg'
                    alt=''
                />
            </div>
            <div>
                <h2 className={title}>Sale Of The Year</h2>
                <p className={des}>
                    Libero sed faucibus facilisis fermenntum. Est nibh sed massa
                    sodales.
                </p>

                <div className={boxBtn}>
                    <Button content={'Read more'} isPriamry={false} />
                </div>
            </div>
            <div
                className={boxImage}
                style={{
                    transform: `translateX(-${translateXPosition}px)`,
                    transition: `transform 0.6s ease`
                }}
            >
                <img
                    src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_2.jpeg'
                    alt=''
                />
            </div>
        </div>
    );
};

export default SaleHomepage;