import { Dispatch } from 'redux';
// import { axiosInstance } from '../../api/axios';
import { statisticAPIResponseSuccess } from '../../types/responses';
import { StatisticAction, statisticTypes } from './statisticTypes';

export const fetchStatistics = () => {
    return async (dispatch: Dispatch<StatisticAction>): Promise<void> => {
        try {
            dispatch({ type: statisticTypes.FETCH_STATISTICS });
            // const statistics: statisticAPIResponseSuccess = await axiosInstance.get('/admin/statistics');
            setTimeout(() => {
                const statistics: statisticAPIResponseSuccess = {
                    error: 0,
                    data: {
                        users: {
                            registered: 362,
                            patients: 204,
                            doctors: 158,
                            records: 738,
                        },
                        consultations: {
                            all: 738,
                            done: 452,
                            waiting: 30,
                            canceled: 256,
                        },
                    },
                };

                dispatch({
                    type: statisticTypes.FETCH_STATISTICS_SUCCESS,
                    payload: statistics,
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
