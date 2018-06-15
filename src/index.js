import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import store from './stores';
import registerServiceWorker from './registerServiceWorker';
import "./index.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

