import React, {Component} from 'react';
import './App.css';
import {Components} from "../data/Components";

class App extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    {Components.map(component => (
                        <div key={component.name}>
                            {component.name}
                            <img className="App-component-icon" src={require(`../assets/${component.icon}`)}/>
                        </div>
                    ))}
                </header>
            </div>
        );
    }
}

export default App;
