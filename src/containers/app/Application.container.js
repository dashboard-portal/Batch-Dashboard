import React from 'react';
import Header from './components/Header.component';
import Main from './components/Main.component';
import Footer from './components/Footer.component';
import {
    CONTAINER_ROUTES
} from '../../Router';

/**
 * App this a self container because in future some initializations will be required, this means
 * that direct relation with redux structure will be need, making of this a container and not just a component.
 */

class App extends React.Component {
    render () {
        return (
            <div
                className="ds-application"
            >
                <Header/>
                <Main/>
                <Footer/>
            </div>
        );
    }
}

export default App;