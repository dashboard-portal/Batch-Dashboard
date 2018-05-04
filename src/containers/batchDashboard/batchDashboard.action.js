import AT from '../../redux/base.action';

/*
 *___ _   _
 |_ _| \ | |
  | ||  \| |
  | || |\  |
 |___|_| \_|
*/
export const fetch_schedulers = () => ({ type: AT.SCHEDULER.FETCH_SCHEDULERS });
export const fetch_jobs = () => ({ type: AT.JOB.FETCH_JOBS });
export const fetch_triggers = () => ({ type: AT.TRIGGER.FETCH_TRIGGERS });

/*
 *  ___  _   _ _____
  / _ \| | | |_   _|
 | | | | | | | | |
 | |_| | |_| | | |
  \___/ \___/  |_|
*/
export const fetch_schedulers_fulfilled = schedulers => ({
    type: AT.SCHEDULER.FETCH_SCHEDULERS_FULFILLED,
    payload: schedulers
});
export const fetch_jobs_fulfilled = jobs => ({
    type: AT.JOB.FETCH_JOBS_FULFILLED, payload: jobs
});
export const fetch_triggers_fulfilled = triggers => ({
    type: AT.TRIGGER.FETCH_TRIGGERS_FULFILLED,
    payload: triggers
});