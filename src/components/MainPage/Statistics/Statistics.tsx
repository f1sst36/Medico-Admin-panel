import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { StatisticsBlock } from '../StatisticsBlock/StatisticsBlock';
import './Statistics.scss';

export const Statistics: React.FC = () => {
    const { pending, error, isEmptyLists } = useTypedSelector((store) => store.statistic);
    console.log('render');

    if (pending) return <>Пагади</>;
    if (error) return <>Ошибка!!</>;

    // if (isEmptyLists) return <></>;
    return (
        <div className="statistics">
            <Typography variant="h4">Пользователи</Typography>
            <Grid container>
                <Grid md={3} item>
                    <StatisticsBlock count={123} label={'Data'} />
                </Grid>
                <Grid md={3} item>
                    <StatisticsBlock count={123} label={'Data'} />
                </Grid>
                <Grid md={3} item>
                    <StatisticsBlock count={123} label={'Data'} />
                </Grid>
                <Grid md={3} item>
                    <StatisticsBlock count={123} label={'Data'} />
                </Grid>
            </Grid>
        </div>
    );
};
