import React from 'react';
import {
    MENU_ROUTES
} from '../../../../Router'

class Menu extends React.Component {
    render () {
        return (
            <div
                className='ds-menu'
            >
                { [{
                    name: 'Batch'
                }, {
                    name: 'Consumer',
                    selected: true
                }, {
                    name: 'Marketing'
                }].map( (menuitem, index) => 
                    <div
                        className={`ds-menu-item ${menuitem.selected ? 'selected' : ''}`}
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