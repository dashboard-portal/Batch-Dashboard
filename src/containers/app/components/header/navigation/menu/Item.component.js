import React from 'react';
import PropTypes from 'prop-types';

class Item extends React.Component {
    static propTypes = {
        // From route render
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
        // From item
        path: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }
    constructor (props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    onClick = e => !this.isSelected() && this.props.history.push(this.props.path)
    render = () => (
        <div
            className={ `ds-menu-item ${ this.isSelected() ? 'selected' : '' }` }
            onClick={ this.onClick }
        >
            { this.props.text }
        </div>
    )
    isSelected = () => this.props.location.pathname === this.props.path;
}

export default Item;