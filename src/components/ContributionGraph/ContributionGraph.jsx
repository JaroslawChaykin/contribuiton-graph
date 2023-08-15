import React from 'react';
import {addDays, format} from "date-fns";
import ContributionGraphCell from "./ContributionGraphCell/ContributionGraphCell";
import cl from './ContributionGraph.module.css'

const ContributionGraph = ({contributionList}) => {

    const createCells = () => {
        const lengthDays = 357;
        const emptyCells = {};

        const withoutNeedlessContributions = () => {
            const contributionListCopy = {...contributionList};
            const deadlineDay = format(addDays(new Date(), -lengthDays), 'yyyy-MM-dd')

            for (let key in contributionListCopy) {
                if (key < deadlineDay) {
                    delete contributionListCopy[key];
                }
            }

            return contributionListCopy
        }

        for (let i = 0; i < lengthDays; i++) {
            const formatDate = format(addDays(new Date(), -i), 'yyyy-MM-dd')
            emptyCells[formatDate] = 0;
        }

        const fillingCells = {
            ...emptyCells,
            ...withoutNeedlessContributions(),
        }

        return Object.entries(fillingCells).reverse()
    }

    return (
        <div className={cl.contributionTable}>
            {
                createCells().map((item) => (
                    <ContributionGraphCell key={item[0]} day={item}/>
                ))
            }
        </div>
    );
};

export default ContributionGraph;