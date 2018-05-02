import React from 'react'
import {
    HashRouter as Router
} from 'react-router-dom';
import {
    Provider
} from 'react-redux';
import appStore from './redux/store';
import Application from './containers/app/Application.container'

class App extends React.Component {
    render () {
        return (
            <Provider
                store={ appStore }
            >
                <Router>
                    <Application/>
                </Router>
            </Provider>
        );
    }    
}

export default App;