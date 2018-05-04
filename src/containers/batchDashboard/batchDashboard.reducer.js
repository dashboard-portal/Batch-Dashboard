import AT from '../../redux/base.action';

export default (
    state = {
        schedulerList: [],
        jobList: [],
        triggerList: []
    }, action
) => {
    switch(action.type){
        // SCHEDULERS
        case AT.SCHEDULER.FETCH_SCHEDULERS:
            return {
                ...state
            };
        case AT.SCHEDULER.FETCH_SCHEDULERS_FULFILLED:
            return {
                ...state,
                schedulerList: action.payload.list
            };
        // JOBS
        case AT.JOB.FETCH_JOBS:
            return {
                ...state
            };
        case AT.JOB.FETCH_JOBS_FULFILLED:
            return {
                ...state,
                jobList: action.payload.list
            };
        // Trigger
        case AT.TRIGGER.FETCH_TRIGGERS:
            return {
                ...state
            };
        case AT.TRIGGER.FETCH_TRIGGERS_FULFILLED:
            return {
                ...state,
                triggerList: action.payload.list
            };

        default:
            return state;
    }
}