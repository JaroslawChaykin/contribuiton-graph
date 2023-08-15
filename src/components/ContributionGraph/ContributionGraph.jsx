import React, {useState} from 'react';
import {addDays, format} from "date-fns";
import ContributionGraphCell from "./ContributionGraphCell/ContributionGraphCell";
import cl from './ContributionGraph.module.css'
import ContributionsWeeks from "./ContributionsWeeks/ContributionsWeeks";
import ContributionMonth from "./ContributionMonth/ContributionMonth";
import ContributionStatusInfo from "./ContributionStatusInfo/ContributionStatusInfo";

const ContributionGraph = ({contributionList}) => {

    const [selectedCell, setSelectedCell] = useState('')

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
        <main>
            <ContributionMonth lastDay={createCells()[0]}/>

            <div className={cl.weeks}>
                <ContributionsWeeks lastDay={createCells()[0]}/>

                <div className={cl.contributionTable}>
                    {
                        createCells().map((item) => (
                            <ContributionGraphCell key={item[0]} day={item} selectedCell={selectedCell} onChange={setSelectedCell}/>
                        ))
                    }
                </div>
            </div>

            <ContributionStatusInfo />
        </main>

    );
};

export default ContributionGraph;