import React from 'react';
import cl from './ContributionsTooltip.module.css'
const ContributionsTooltip = ({children, styles, hidden}) => {

    return (
        <span className={cl.tooltip} hidden={hidden}>
            <div className={cl.content}>
                {children}
                <span className={cl.tooltipCursor}></span>
            </div>
        </span>
    );
};

export default ContributionsTooltip;