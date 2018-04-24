import React from 'react'
import {
    Route,
    Switch,
    Redirect,
    HashRouter as Router
} from 'react-router-dom'
import {
    Provider
} from 'react-redux';
import appStore from './redux/store';
import {
    MainWrap
} from './components/mainWrap/mainWrap';
import {
    CONTAINER_ROUTES
} from './Router';

export default class extends React.Component {
    render () {
        return (
            <Provider
                store={ appStore }
            >
                <Router>
                    { this._app() }
                </Router>
            </Provider>
        );
    }
    _app () {
        return (
            <div
                className="main"
            >
                <MainWrap/>
                { this._main() }
            </div>
        );
    }
    _main () {
        return (
            <div className='dashboard-body'>
                <Switch>
                    <Redirect
                        exact
                        from='/'
                        to='/batch'
                    />
                    { CONTAINER_ROUTES.map(
                        (route, index) =>
                            <Route
                                exact
                                key={index}
                                path={route.path}                            
                                component={route.component}
                            />
                    ) }
                </Switch> 
            </div>
        );
    }
}