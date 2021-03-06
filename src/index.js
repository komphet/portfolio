import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './containers/AppContainer';
import registerServiceWorker from './registerServiceWorker';
import store from './store'
import { Provider } from 'react-redux'

class App extends React.Component{
    render(){
        return (
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
