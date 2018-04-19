import React from 'react'

export default class extends React.Component {
    render () {
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