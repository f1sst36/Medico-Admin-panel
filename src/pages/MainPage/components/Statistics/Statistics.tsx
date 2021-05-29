import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { StatisticsBlock } from '../index';
import './Statistics.scss';
import { StatisticsSkeleton } from './StatisticsSkeleton';

export const Statistics: React.FC = () => {
    const { pending, error, users, consultations } = useTypedSelector((store) => store.statistic);

    if (error) return <>{error}</>;

    return (
        <div className="statistics">
            <div className="statistics__users">
                <Typography variant="h4">Пользователи</Typography>
                <Grid className="statistics__list" spacing={3} justify="space-between" container>
                    {!users || !consultations || pending ? (
                        <StatisticsSkeleton />
                    ) : (
                        <>
                            <Grid xs={12} md={3} item>
                                <StatisticsBlock count={users.registered} label={'Всего'} />
                            </Grid>
                            <Grid xs={12} md={3} item>
                                <StatisticsBlock count={users.patients} label={'Пациенты'} />
                            </Grid>
                            <Grid xs={12} md={3} item>
                                <StatisticsBlock count={users.doctors} label={'Доктора'} />
                            </Grid>
                            <Grid xs={12} md={3} item>
                                <StatisticsBlock count={users.records} label={'Записи'} />
                            </Grid>
                        </>
                    )}
                </Grid>
            </div>

            <div className="statistics__consultations">
                <Typography variant="h4">Консультации</Typography>
                <Grid className="statistics__list" spacing={3} justify="space-between" container>
                    {!users || !consultations || pending ? (
                        <StatisticsSkeleton />
                    ) : (
                        <>
                            <Grid xs={12} md={3} item>
                                <StatisticsBlock count={consultations.all} label={'Все'} />
                            </Grid>
                            <Grid xs={12} md={3} item>
                                <StatisticsBlock count={consultations.done} label={'Завершены'} />
                            </Grid>
                            <Grid xs={12} md={3} item>
                                <StatisticsBlock
                                    count={consultations.waiting}
                                    label={'Ожидаются'}
                                />
                            </Grid>
                            <Grid xs={12} md={3} item>
                                <StatisticsBlock
                                    count={consultations.canceled}
                                    label={'Отменены'}
                                />
                            </Grid>
                        </>
                    )}
                </Grid>
            </div>
        </div>
    );
};
