import React from 'react';
import cl from './ContributionStatusInfo.module.css'

const ContributionStatusInfo = () => {
    const classes = cl.status + ' ' + cl.status1;

    return (
        <div className={cl.statusInfo}>
            <span className={cl.title}>Меньше</span>
            <div className={cl.statuses}>
                <span className={cl.status + ' ' + cl.status1}></span>
                <span className={cl.status + ' ' + cl.status2}></span>
                <span className={cl.status + ' ' + cl.status3}></span>
                <span className={cl.status + ' ' + cl.status4}></span>
                <span className={cl.status + ' ' + cl.status5}></span>
            </div>
            <span className={cl.title}>Больше</span>
        </div>
    );
};

export default ContributionStatusInfo;