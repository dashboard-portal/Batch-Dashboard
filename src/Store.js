import {
    createStore,
    applyMiddleware
} from 'redux';
import {
    createEpicMiddleware
} from 'redux-observable';

import BaseEpic from './bases/Base.epic';
import BaseReducer from './bases/Base.reducer';

const epicMiddleware = createEpicMiddleware(BaseEpic);

export default createStore(
    BaseReducer,
    applyMiddleware(epicMiddleware)
);