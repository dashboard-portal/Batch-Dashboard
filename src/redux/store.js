import {
    createStore,
    applyMiddleware
} from 'redux';
import {
    createEpicMiddleware
} from 'redux-observable';

import baseEpic from './base.epic';
import baseReducer from './base.reducer';

const epicMiddleware = createEpicMiddleware(baseEpic);

export default createStore(
    baseReducer,
    applyMiddleware(epicMiddleware)
);