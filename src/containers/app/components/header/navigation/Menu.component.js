import React from 'react';
import {
    Route
} from 'react-router-dom'
import {
    MENU_ROUTES
} from '../../../../../Router';
import Item from './menu/Item.component'

class Menu extends React.Component {    
    render () {
        return (
            <div
                className='ds-menu'
            >              
                { MENU_ROUTES.map( (item, index) => 
                    <Route
                        key={ item.path + '-' + index }
                        path='/'
                        render={ props => (
                            <Item
                                { ...item }
                                { ...props }
                            />
                        ) }
                    />
                ) }
            </div>
        );
    }
}
export default Menu;