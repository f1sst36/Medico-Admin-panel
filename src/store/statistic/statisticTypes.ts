import { APIResponse } from '../../types/responses';

export interface StatisticState {
    users: {
        registered: number;
        patients: number;
        doctors: number;
        records: number;
    };
    consultations: {
        all: number;
        done: number;
        waiting: number;
        cancel: number;
    };
    isEmptyLists: boolean;
    pending: boolean;
    error: null | string;
}

export enum statisticTypes {
    FETCH_STATISTICS = 'FETCH_STATISTICS',
    FETCH_STATISTICS_SUCCESS = 'FETCH_STATISTICS_SUCCESS',
    FETCH_STATISTICS_ERROR = 'FETCH_STATISTICS_ERROR',
}

interface fetchStatisticsAction {
    type: statisticTypes.FETCH_STATISTICS;
}

interface fetchStatisticsSuccessAction {
    type: statisticTypes.FETCH_STATISTICS_SUCCESS;
    payload: APIResponse;
}

interface fetchStatisticsErrorAction {
    type: statisticTypes.FETCH_STATISTICS_ERROR;
    payload: string;
}

export type StatisticAction =
    | fetchStatisticsAction
    | fetchStatisticsSuccessAction
    | fetchStatisticsErrorAction;
