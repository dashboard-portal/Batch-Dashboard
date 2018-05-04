import {
    combineEpics
} from 'redux-observable';

import {
    fetchSchedulers
} from '../containers/batchDashboard/batchDashboard.epic';

export default combineEpics(
    fetchSchedulers
);