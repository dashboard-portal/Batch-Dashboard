import React from 'react'
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import {
    CONTAINER_ROUTES
} from '../../../Router';

class Main extends React.Component {
    render () {
        return (
            <main
                className='ds-main'
            >
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
                                key={ index }
                                path={ route.path }
                                component={ route.component }
                            />
                    ) }
                </Switch> 
            </main>
        );
    }
}
export default Main;