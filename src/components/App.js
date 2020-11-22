import React, { Component } from 'react';

import UserCreate from './UserCreate';
import LangugeContext from '../contexts/LangugeContext';
import ColorContext from '../contexts/ColorContext';

class App extends Component {

    state = { languge: 'english' };

    onLangugeChange = languge => {
        this.setState({ languge });
    };

    render() {
        return (
            <div className="ui container">
                <div>
                    Select a languge:
                    <i className="flag us" onClick={() => this.onLangugeChange('english')} />
                    <i className="flag es" onClick={() => this.onLangugeChange('spanish')} />
                </div>
                <ColorContext.Provider value='red'>
                    <LangugeContext.Provider value={this.state.languge}>
                        <UserCreate />
                    </LangugeContext.Provider>
                </ColorContext.Provider>
            </div>
        );
    };
}

export default App;