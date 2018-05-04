import {
    Observable
} from 'rxjs/Rx';
import {
    BASE_PATH
} from '../../constants/Paths';
import AT from '../../redux/base.action';
import {
    fetch_schedulers_fulfilled,
    fetch_jobs_fulfilled,
    fetch_triggers_fulfilled
} from './batchDashboard.action';

const INTERVAL = 30000;

/*
 * ___  ____ ____  _____ ______     ___    ____  _     _____ ____
  / _ \| __ ) ___|| ____|  _ \ \   / / \  | __ )| |   | ____/ ___|
 | | | |  _ \___ \|  _| | |_) \ \ / / _ \ |  _ \| |   |  _| \___ \
 | |_| | |_) |__) | |___|  _ < \ V / ___ \| |_) | |___| |___ ___) |
  \___/|____/____/|_____|_| \_\ \_/_/   \_\____/|_____|_____|____/
*/
const getSchedulers$ = () =>
    Observable.ajax({
        method: 'GET',
        url: `${BASE_PATH}/jobs/schedulers`
    });
const getJobs$ = scheduler =>
    Observable.ajax({
        method: 'GET',
        url: `${BASE_PATH}/jobs/schedulers/${scheduler}`
    });
const getTriggers$ = (scheduler, job) =>
    Observable.ajax({
        method: 'GET',
        url: `${BASE_PATH}/jobs/triggers?schedulerName=${scheduler}&jobName=${job}`
    });

/*
*_____ ____ ___ ____ ____
| ____|  _ \_ _/ ___/ ___|
|  _| | |_) | | |   \___ \
| |___|  __/| | |___ ___) |
|_____|_|  |___\____|____/
*/
export const fetchSchedulers = action$ =>
    action$.ofType(AT.SCHEDULER.FETCH_SCHEDULERS)
        .mergeMap( () =>
            getSchedulers$()
                .map(fetch_schedulers_fulfilled)
        );
export const fetchJobs = action$ =>
    action$.ofType(AT.JOB.FETCH_JOBS)
        .mergeMap( scheduler =>
            getJobs$(scheduler)
                .map(fetch_jobs_fulfilled)
        );
export const fetchTriggers = action$ =>
    action$.ofType(AT.JOB.FETCH_JOBS)
        .mergeMap( (scheduler, job) =>
            getTriggers$(scheduler, job)
                .map(fetch_triggers_fulfilled)
        );