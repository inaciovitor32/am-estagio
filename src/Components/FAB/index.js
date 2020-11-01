import React, { Component } from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

export default class FAB extends Component {
    render() {
        return (
            <div class="fab" onClick={this.props.onClick}>
                <FontAwesomeIcon icon={faArrowUp} />
            </div>
        );
    }
}