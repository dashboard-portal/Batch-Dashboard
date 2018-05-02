import React from 'react';

import Header from './navigation/Header.component';
import Menu from './navigation/Menu.component';

class Navigation extends React.Component {    
    constructor (props) {
        super(props);
    }
    render () {        
        return (
            <div

            >
                <Header/>
                <Menu/>
            </div>
        );
    }
}

export default Navigation;