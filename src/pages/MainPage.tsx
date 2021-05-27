import React, { useEffect } from 'react';
import { Statistics } from '../components/MainPage/Statistics/Statistics';
import { useActions } from '../hooks/useActions';

export const MainPage: React.FC = () => {
    const { fetchStatistics } = useActions();

    useEffect(() => {
        fetchStatistics();
    }, [fetchStatistics]);

    return (
        <>
            <Statistics />
        </>
    );
};
