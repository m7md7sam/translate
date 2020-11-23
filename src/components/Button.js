import React, { Component } from 'react';

import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends Component {

    renderSubmit = (language) => language === 'english' ? 'Submit' : 'Enviar';

    renderButton = (color) => {
        return (
            <button className= {`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {({ language }) => this.renderSubmit(language)}
                </LanguageContext.Consumer>
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