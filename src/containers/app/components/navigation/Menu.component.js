import React from 'react';
import {
    MENU_ROUTES
} from '../../../../Router'

class Menu extends React.Component {
    render () {
        return (
            <div className='topmenu'>
                { MENU_ROUTES.map( (menuitem, index) => 
                    <div
                        className='topmenu-item'
                        key={`menuitem-${index}`}
                    >
                        { menuitem.name }
                    </div>
                ) }
            </div>
        );
    }
}
export default Menu;
// Wrap with a HOC to manage the strings.