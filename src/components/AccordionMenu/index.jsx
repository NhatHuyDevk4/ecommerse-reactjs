import React, { useState } from 'react';
import style from './styles.module.scss';
import cls from 'classnames';
import { IoIosArrowDown } from 'react-icons/io';
import { TfiLayoutLineSolid } from 'react-icons/tfi';
function AccordionMenu() {
    const {
        container,
        title,
        activeTitle,
        contentMenu,
        isVisibility,
        borderBottom
    } = style;

    const [isSelected, setIsSelected] = useState(false);

    const handleToggle = () => {
        setIsSelected(!isSelected);
    };

    return (
        <div className={container}>
            <div
                className={cls(title, { [activeTitle]: isSelected })}
                onClick={handleToggle}
            >
                {isSelected ? <TfiLayoutLineSolid /> : <IoIosArrowDown />}
                ADDITIONAL INFORMATION
            </div>

            <div
                className={cls(contentMenu, borderBottom, {
                    [isVisibility]: isSelected,
                    [borderBottom]: isSelected
                })}
            >
                <div>Size -------- L,M,S</div>
            </div>
            <div
                className={cls(title, { [activeTitle]: isSelected })}
                onClick={handleToggle}
            >
                {isSelected ? <TfiLayoutLineSolid /> : <IoIosArrowDown />}
                ADDITIONAL INFORMATION
            </div>

            <div
                className={cls(contentMenu, borderBottom, {
                    [isVisibility]: isSelected,
                    [borderBottom]: isSelected
                })}
            >
                <div>Size -------- L,M,S</div>
            </div>
        </div>
    );
}

export default AccordionMenu;
