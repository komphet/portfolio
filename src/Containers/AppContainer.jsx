import React, {Component} from 'react';
import logo from '../logo.svg';
import '../App.css';
import InputForm from "../components/InputForm";

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: "komphet"
        }
    }

    __onChangeHandler(e){
        this.setState({
            name: e.target.value
        });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <InputForm __onChangeHandler={this.__onChangeHandler.bind(this)}/>
                <div>{this.state.name}</div>
            </div>
        );
    }
}

export default App;
