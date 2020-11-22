import React, { Component } from 'react';

import LangugeContext from '../contexts/LangugeContext';
import ColorContext from '../contexts/ColorContext';

class Button extends Component {

    renderSubmit = (value) => value === 'english' ? 'Submit' : 'Enviar';

    renderButton = (color) => {
        return (
            <button className= {`ui button ${color}`}>
                <LangugeContext.Consumer>
                    {(value) => this.renderSubmit(value)}
                </LangugeContext.Consumer>
            </button>
        );
    };

    render() {
        return (
            <ColorContext.Consumer>
                {(color) => this.renderButton(color)}
            </ColorContext.Consumer>
            
        );
    };
}

export default Button;