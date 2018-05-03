import React from 'react';
import {
    IconPortalTrigger
} from '../../../../../components/icons'

class PortalSelector extends React.Component {
    render () {
        return (
            <div
                className='ds-portal-selector'
            >
                <div
                    className='box'
                >
                    <IconPortalTrigger/>
                    <span
                        className='name'
                    >
                        DASHBOARD
                    </span>
                </div>
            </div>
        );
    }
}

export default PortalSelector;