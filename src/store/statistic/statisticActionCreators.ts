import { Dispatch } from 'redux';
import { axiosInstance } from '../../api/axios';
import { StatisticAction, statisticTypes } from './statisticTypes';

export const fetchStatistics = () => {
    return async (dispatch: Dispatch<StatisticAction>): Promise<void> => {
        try {
            dispatch({ type: statisticTypes.FETCH_STATISTICS });
            // const statistics = await axiosInstance.get('/admin/statistics');
            setTimeout(() => {
                let statistics: any = {
                    data: {},
                };
                statistics.data = {
                    error: 0,
                    data: {},
                };

                dispatch({
                    type: statisticTypes.FETCH_STATISTICS_SUCCESS,
                    payload: statistics.data,
                });
            }, 2000);
        } catch (e) {
            dispatch({
                type: statisticTypes.FETCH_STATISTICS_ERROR,
                payload: 'Ошибка получения статистики',
            });
        }
    };
};
