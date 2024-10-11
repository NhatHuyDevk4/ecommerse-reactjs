import Layout from '@components/Layout/Layout';
import React from 'react';
import { dataInfo } from './constants';
import InfoCard from './InfoCard/InfoCard';
import styles from './styles.module.scss';

const Info = () => {
    const { container } = styles;

    return (
        <Layout>
            <div className={container}>
                {dataInfo.map((item) => {
                    return (
                        <InfoCard
                            content={item.title}
                            description={item.description}
                            src={item.src}
                        />
                    );
                })}
            </div>
        </Layout>
    );
};

export default Info;
