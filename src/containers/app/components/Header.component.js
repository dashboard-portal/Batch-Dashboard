import React from 'react';
import TopBar from './header/TopBar.component';
import Navigation from './header/Navigation.component';

class Header extends React.Component {
    render () {
        return (
            <div
                className='ds-header'
            >
                <TopBar/>
                <Navigation/>
            </div>
        );
    }
}

export default Header;