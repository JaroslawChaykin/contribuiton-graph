import React from 'react';
import {addMonths, format} from "date-fns";
import cl from './ContributionMonth.module.css'

const monthsTranslate = {
    August: 'Авг.',
    September: 'Сен.',
    October: 'Окт.',
    November: 'Нояб.',
    December: 'Дек.',
    January: 'Янв.',
    February: 'Февр.',
    March: 'Март',
    April: 'Апр.',
    May: 'Май',
    June: 'Июнь',
    July: 'Июль'
};

const ContributionMonth = ({lastDay}) => {
    const [date] = lastDay;

    const createMonths = () => {
        const correctDate = new Date(date);
        const months = [];

        for (let i = 0; i < 12; i++) {
            months.push(monthsTranslate[format(addMonths(correctDate, i), 'MMMM')])
        }

        return months
    }

    return (
        <div className={cl.months}>
            {createMonths().map((item,index) => (<span key={index} className={cl.monthItem}>{item}</span>))}
        </div>
    );
};

export default ContributionMonth;