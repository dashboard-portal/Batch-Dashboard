import {
    combineEpics
} from 'redux-observable';

import {
    fetchSchedulers,
    fetchJobs,
    fetchTriggers
} from '../containers/batchDashboard/batchDashboard.epic';

export default combineEpics(
    fetchSchedulers,
    fetchJobs,
    fetchTriggers
);