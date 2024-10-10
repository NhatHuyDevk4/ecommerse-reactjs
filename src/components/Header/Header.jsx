import React from 'react';
import BoxIcon from './BoxIcon/BoxIcon';
import { dataBoxIcon, dataMenu } from './constants';

import styles from './styles.module.scss';
import Menu from './Menu/Menu';
import Logo from '@icons/images/Logo-retina.png';

import reloadIcon from '@icons/svgs/reloadIcon.svg';
import heartIcon from '@icons/svgs/heartIcon.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';

const Header = () => {
    const {
        containerBoxIcon,
        containerMenu,
        containerHeader,
        containerBox,
        container
    } = styles;

    return (
        <div className={container}>
            <div className={containerHeader}>
                <div className={containerBox}>
                    <div className={containerBoxIcon}>
                        {dataBoxIcon.map((item) => {
                            return (
                                <BoxIcon type={item.type} href={item.href} />
                            );
                        })}
                    </div>
                    <div className={containerMenu}>
                        {dataMenu.slice(0, 3).map((item) => {
                            return <Menu content={item.content} />;
                        })}
                    </div>
                </div>
                <div>
                    <img
                        src={Logo}
                        alt='Logo'
                        style={{ width: '153px', height: '53px' }}
                    />
                </div>
                <div className={containerBox}>
                    <div className={containerMenu}>
                        {dataMenu.slice(3, dataMenu.length).map((item) => {
                            return <Menu content={item.content} />;
                        })}
                    </div>
                    <div className={containerBoxIcon}>
                        <img
                            src={reloadIcon}
                            alt='reload'
                            width={26}
                            height={26}
                        />
                        <img
                            src={heartIcon}
                            alt='heart'
                            width={26}
                            height={26}
                        />
                        <img src={cartIcon} alt='cart' width={26} height={26} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
