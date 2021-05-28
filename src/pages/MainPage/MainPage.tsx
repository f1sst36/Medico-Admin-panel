import React, { useEffect } from 'react';
import { Statistics } from './components';
import { useActions } from '../../hooks/useActions';
import { useDispatch } from 'react-redux';
import { statisticTypes } from '../../store/statistic/statisticTypes';

export const MainPage: React.FC = () => {
    const { fetchStatistics } = useActions();
    const dispatch = useDispatch();

    useEffect(() => {
        fetchStatistics();

        return () => {
            dispatch({ type: statisticTypes.CLEAR_STATISTICS_STATE });
        };
    }, [fetchStatistics, dispatch]);

    return (
        <>
            <Statistics />
        </>
    );
};
