import React from 'react'
import {
    HashRouter as Router
} from 'react-router-dom'

export default class extends React.Component {
    render () {
        return (           
            <Router>
                {
                    this._app()
                }
            </Router>
        );
    }
    _app () {
        return (
            <div

            >
                <div
                    className='topbar'
                >
                    <div
                        className='welcometopbar'
                    >
                        <div
                            className='logo-container'
                        >
                            <div
                                className='logo'
                            ></div>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                    <div
                        className='topmenu'
                    >
                        <div
                            className='topmenu-item'
                        >
                            Home
                        </div>
                        <div
                            className='topmenu-item selected'
                        >
                            Images
                        </div>
                        <div
                            className='topmenu-item'
                        >
                            Lectures
                        </div>
                    </div>
                </div>                    
            </div>     
        );
    }
}