import React from 'react';
import {addDays, format} from "date-fns";
import cl from './ContributionsWeeks.module.css'

const weekTranslate = {
    'Mo': 'Пн',
    'Tu': 'Вт',
    'We': 'Ср',
    'Th': 'Чт',
    'Fr': 'Пт',
    'Sa': 'Сб',
    'Su': 'Вс',
};

const ContributionsWeeks = ({lastDay}) => {

    const [date] = lastDay;

    const createWeek = () => {
        const correctDate = new Date(date);
        const week = [];

        for (let i = 0; i < 7; i++) {
            week.push(weekTranslate[format(addDays(correctDate, i), 'EEEEEE')])
        }

        return week;
    }

    return (
        <div className={cl.weeks}>
            {
                createWeek().map((item, i) => {
                    if (i % 2 === 0 && i !== createWeek().length - 1) {
                        return (<div key={i} className={cl.weekDay}>{item}</div>)
                    } else {
                        return (<div key={i} className={cl.weekDay}></div>)
                    }
                })
            }
        </div>
    );
};

export default ContributionsWeeks;