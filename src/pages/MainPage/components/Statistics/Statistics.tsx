import { Grid, Typography } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import React from 'react';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { StatisticsBlock } from '../index';
import './Statistics.scss';

export const Statistics: React.FC = () => {
    const { pending, error, users, consultations } = useTypedSelector((store) => store.statistic);
    console.log('render');

    if (error) return <>Ошибка!!</>;
    // if (!users || !consultations || pending) return <>Пагади</>;

    return (
        <div className="statistics">
            <div className="statistics__users">
                <Typography variant="h4">Пользователи</Typography>
                <Grid className="statistics__list" spacing={3} justify="space-between" container>
                    {!users || !consultations || pending ? (
                        <>
                            <Grid md={3} item>
                                <Skeleton variant="rect" animation='wave' width={210} height={118} />
                            </Grid>
                            <Grid md={3} item>
                                <Skeleton variant="rect" width={210} height={118} />
                            </Grid>
                            <Grid md={3} item>
                                <Skeleton variant="rect" width={210} height={118} />
                            </Grid>
                            <Grid md={3} item>
                                <Skeleton variant="rect" width={210} height={118} />
                            </Grid>
                        </>
                    ) : (
                        <>
                            <Grid md={3} item>
                                <StatisticsBlock count={users.registered} label={'Всего'} />
                            </Grid>
                            <Grid md={3} item>
                                <StatisticsBlock count={users.patients} label={'Пациенты'} />
                            </Grid>
                            <Grid md={3} item>
                                <StatisticsBlock count={users.doctors} label={'Доктора'} />
                            </Grid>
                            <Grid md={3} item>
                                <StatisticsBlock count={users.records} label={'Записи'} />
                            </Grid>
                        </>
                    )}
                </Grid>
            </div>

            <div className="statistics__consultations">
                <Typography variant="h4">Консультации</Typography>
                {/* <Grid className="statistics__list" spacing={3} justify="space-between" container>
                    <Grid md={3} item>
                        <StatisticsBlock count={consultations.all} label={'Все'} />
                    </Grid>
                    <Grid md={3} item>
                        <StatisticsBlock count={consultations.done} label={'Завершены'} />
                    </Grid>
                    <Grid md={3} item>
                        <StatisticsBlock count={consultations.waiting} label={'Ожидаются'} />
                    </Grid>
                    <Grid md={3} item>
                        <StatisticsBlock count={consultations.canceled} label={'Отменены'} />
                    </Grid>
                </Grid> */}
            </div>
        </div>
    );
};
