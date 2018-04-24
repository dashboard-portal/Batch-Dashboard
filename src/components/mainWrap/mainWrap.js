import React from 'react';
import {
    MENU_ROUTES
} from '../../Router';

export const MainWrap = props => {
    return (
        <div className='topbar'>
            <div className='welcometopbar'>
                <div className='logo-container'>
                    <div className='logo'/>
                </div>
            </div>
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
        </div>
    )
}