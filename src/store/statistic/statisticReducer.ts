import { StatisticAction, StatisticState, statisticTypes } from './statisticTypes';

const initialState: StatisticState = {
    users: null,
    consultations: null,
    pending: false,
    error: null,
};

export const statisticReducer = (state = initialState, action: StatisticAction): StatisticState => {
    switch (action.type) {
        case statisticTypes.FETCH_STATISTICS:
            return { ...state, pending: true };
        case statisticTypes.FETCH_STATISTICS_SUCCESS:
            return {
                ...state,
                users: action.payload.data.users,
                consultations: action.payload.data.consultations,
                pending: false,
            };
        case statisticTypes.FETCH_STATISTICS_ERROR:
            return { ...state, pending: false, error: action.payload };
        case statisticTypes.CLEAR_STATISTICS_STATE:
            return initialState;

        default:
            return state;
    }
};
