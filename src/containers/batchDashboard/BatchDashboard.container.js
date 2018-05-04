import React from 'react'
import {
    connect
} from 'react-redux';
import {
    fetch_schedulers,
    fetch_jobs,
    fetch_triggers
} from "./batchDashboard.action";

class BatchDashboard extends React.Component {
    componentWillMount = () => {
        this.props.fetchSchedulers();
    };

    render () {
        return (
            <div>
                This is the Batch DashBoard View
            </div>
        );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    fetchSchedulers(){
        dispatch(fetch_schedulers());
    },
    fetchJobs(scheduler){
        dispatch(fetch_jobs(scheduler));
    },
    fetchTriggers(scheduler, job){
        dispatch(fetch_triggers(scheduler, job));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BatchDashboard)