import React from 'react';

import Header from './navigation/Header.component';
import Menu from './navigation/Menu.component';

class Navigation extends React.Component {    
    render () {
        return (
            <React.Fragment>
                <Header/>
                <Menu/>
            </React.Fragment>
        );
    }
}

export default Navigation;