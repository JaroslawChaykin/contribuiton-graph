import React, {useState} from 'react';
import ContributionsTooltip from "../ContributionsTooltip/ContributionsTooltip";
import {format} from "date-fns";
import cl from './ContributionGraphCell.module.css';

const ContributionGraphCell = ({day, selectedCell, onChange}) => {
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

    const formatingDate = () => {
        const correctDate = new Date(date);
        const weekDay = format(correctDate, 'EEEE');
        const month = format(correctDate, 'MMMM');
        const day = format(correctDate, 'dd');
        const year = format(correctDate, 'uuuu');

        return `${weekDay}, ${month} ${day}, ${year}`
    }

    const classnames = cl.cell + ' ' + setBackgroundColor();

    return (
        <div className={cl.cellBody}>
            <div className={classnames} title={`${date}`} onClick={() => onChange(date)}></div>
            <ContributionsTooltip hidden={date !== selectedCell}>
                <div>
                    <div className={cl.contributions}>{value} contributions</div>
                    <div className={cl.date}>{formatingDate()}</div>
                </div>
            </ContributionsTooltip>
        </div>
    );
};

export default ContributionGraphCell;