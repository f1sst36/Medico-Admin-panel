import { statisticAPIResponseSuccess } from '../../types/responses';

export interface StatisticState {
    users: {
        registered: number;
        patients: number;
        doctors: number;
        records: number;
    } | null;
    consultations: {
        all: number;
        done: number;
        waiting: number;
        canceled: number;
    } | null;
    pending: boolean;
    error: null | string;
}

// Название страницы где используется этот action / название action
// Если action используется везде (например получение инфы о текущем юзере по токену), то ставь APP/...
export enum statisticTypes {
    FETCH_STATISTICS = 'MAIN/FETCH_STATISTICS',
    FETCH_STATISTICS_SUCCESS = 'MAIN/FETCH_STATISTICS_SUCCESS',
    FETCH_STATISTICS_ERROR = 'MAIN/FETCH_STATISTICS_ERROR',
    CLEAR_STATISTICS_STATE = 'MAIN/CLEAR_STATISTICS_STATE',
}

interface fetchStatisticsAction {
    type: statisticTypes.FETCH_STATISTICS;
}

interface fetchStatisticsSuccessAction {
    type: statisticTypes.FETCH_STATISTICS_SUCCESS;
    payload: statisticAPIResponseSuccess;
}

interface fetchStatisticsErrorAction {
    type: statisticTypes.FETCH_STATISTICS_ERROR;
    payload: string;
}

interface clearStatisticsStateAction {
    type: statisticTypes.CLEAR_STATISTICS_STATE;
}

export type StatisticAction =
    | fetchStatisticsAction
    | fetchStatisticsSuccessAction
    | fetchStatisticsErrorAction
    | clearStatisticsStateAction;
