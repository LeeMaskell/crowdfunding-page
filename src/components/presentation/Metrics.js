import React from 'react';
import MetricsCSS from '../../styles/Metrics.module.css';

const Metrics = () => {
    return (
        <div className={MetricsCSS.metrics}>
            <div className={MetricsCSS.total}>
                <h1 className={MetricsCSS.title}>$89,914</h1>
                <p className={MetricsCSS.info}>of $100,000 backed</p>
            </div>
            <div className={MetricsCSS.backers}>
                <h1 className={MetricsCSS.title}>5,007</h1>
                <p className={MetricsCSS.info}>total backers</p>
            </div>
            <div className={MetricsCSS.days}>
                <h1 className={MetricsCSS.title}>56</h1>
                <p className={MetricsCSS.info}>days left</p>
            </div>

        </div>
    )
}

export default Metrics
