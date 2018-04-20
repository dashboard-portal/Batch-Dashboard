import {
    createStore,
    applyMiddleware
} from 'redux';
import {
    createEpicMiddleware
} from 'redux-observable';

import BaseEpic from './Base.epic';
import BaseReducer from './Base.reducer';

const epicMiddleware = createEpicMiddleware(BaseEpic);

export default createStore(
    BaseReducer,
    applyMiddleware(epicMiddleware)
);