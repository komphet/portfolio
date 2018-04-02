import React, {Component} from 'react';
import logo from '../logo.svg';
import '../App.css';
import InputForm from "../components/InputForm";
import { connect } from 'react-redux'
import { setUser } from "../actions/userAction";

class AppContainer extends Component {
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

    __changeUser(){
        let user = {
            firstname: this.state.name,
            lastname: "Akimoto",
            age: 34,
            birthday: "5/2/1999",
            email: "akira@gmail.com"
        }

        this.props.setUser(user);

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


                <div>Firstname: {this.props.user.firstname}</div>
                <div>Lastname: {this.props.user.lastname}</div>
                <div>Age: {this.props.user.age}</div>
                <div>Birthday: {this.props.user.birthday}</div>
                <div>Email: {this.props.user.email}</div>
                <button onClick={this.__changeUser.bind(this)}>Change to Akimoto</button>


            </div>
        );
    }
}

export default connect(
    (store)=>{
        return {
            user: store.user
        }
    },{
        setUser
    })(AppContainer);
