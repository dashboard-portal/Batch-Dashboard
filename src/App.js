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
import Store from './redux/Store';
import {
    CONTAINER_ROUTES
} from './Router'

export default class extends React.Component {
    render () {
        return (
            <Provider
                store={Store}
            >
                <Router>
                    {
                        this._app()
                    }
                </Router>
            </Provider>
        );
    }
    _app () {
        return (
            <div

            >
                {
                    this._top_bar()
                }
                {                    
                    this._main()
                }
                                    
            </div>     
        );
    }
    _top_bar () {
        return (
            <div
                className='topbar'
            >
                <div
                    className='welcometopbar'
                >
                    <div
                        className='logo-container'
                    >
                        <div
                            className='logo'
                        ></div>
                    </div>
                    <div>
                        
                    </div>
                </div>
                <div
                    className='topmenu'
                >
                    <div
                        className='topmenu-item'
                    >
                        Home
                    </div>
                    <div
                        className='topmenu-item selected'
                    >
                        Images
                    </div>
                    <div
                        className='topmenu-item'
                    >
                        Lectures
                    </div>
                </div>
            </div>
        );
    }
    _main () {
        return (
            <div>
                <Switch>
                    <Redirect
                        exact
                        from='/'
                        to='/batch'
                    />
                    {
                        CONTAINER_ROUTES.map(
                            (route, index) => (
                                <Route
                                    exact
                                    key={index}
                                    path={route.path}                            
                                    component={route.component}
                                />
                            )
                        )
                    }
                </Switch> 
            </div>
        );
    }
}