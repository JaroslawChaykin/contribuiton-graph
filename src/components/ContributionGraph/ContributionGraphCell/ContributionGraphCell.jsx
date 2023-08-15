import React from 'react';
import cl from './ContributionGraphCell.module.css';

const ContributionGraphCell = ({day}) => {
    const [date, value] = day;
    const setBackgroundColor = () => {

        if (value === 0) {
            return '';
        } else if (value <= 9) {
            return cl.cellStatus1;
        } else if (value <= 19) {
            return cl.cellStatus2;
        } else if (value <= 29) {
            return cl.cellStatus3;
        } else if (value >= 30) {
            return cl.cellStatus4;
        }
    }

    const classnames = cl.cell + ' ' + setBackgroundColor()

    return (
        <div className={classnames} title={`${date}`}></div>
    );
};

export default ContributionGraphCell;