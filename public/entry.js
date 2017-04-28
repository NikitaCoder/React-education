import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import counterApp from './reducers';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();

var store = createStore(counterApp);

ReactDOM.render(

    <Provider store={store}>
        <MuiThemeProvider>
            <App />
        </MuiThemeProvider>    
    </Provider>,
    document.getElementById('app')

);


