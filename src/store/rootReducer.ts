import { combineReducers } from 'redux';
import { statisticReducer } from './statistic/statisticReducer';

export const rootReducer = combineReducers({
    statistic: statisticReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
