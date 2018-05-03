import React from 'react';

import PortalSelector from './navigation/PortalSelector.component';
import Menu from './navigation/Menu.component';

class Navigation extends React.Component {    
    constructor (props) {
        super(props);
    }
    render () {        
        return (
            <div
                className='ds-navigation'
            >
                <PortalSelector/>
                <Menu/>
            </div>
        );
    }
}

export default Navigation;