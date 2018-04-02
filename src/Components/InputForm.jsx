import React, { Component } from 'react'

class InputForm extends Component {
    render(){
        return (
            <div>
                <input onChange={this.props.__onChangeHandler.bind(this)} type="text"/>
            </div>
        )
    }
}

export default InputForm;
