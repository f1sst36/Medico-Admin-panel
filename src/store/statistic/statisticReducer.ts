import { StatisticAction, StatisticState, statisticTypes } from './statisticTypes';

const initialState: StatisticState = {
    users: {
        registered: 0,
        patients: 0,
        doctors: 0,
        records: 0,
    },
    // Записи на консультации (кол-во)
    consultations: {
        all: 0,
        done: 0,
        waiting: 0,
        cancel: 0,
    },
    isEmptyLists: true,
    pending: false,
    error: null,
};

export const statisticReducer = (state = initialState, action: StatisticAction): StatisticState => {
    switch (action.type) {
        case statisticTypes.FETCH_STATISTICS:
            return { ...state, pending: true };
        case statisticTypes.FETCH_STATISTICS_SUCCESS:
            return { ...state, pending: false, isEmptyLists: false };
        case statisticTypes.FETCH_STATISTICS_ERROR:
            return { ...state, pending: false, error: action.payload };

        default:
            return state;
    }
};
