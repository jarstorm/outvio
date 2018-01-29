import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducer';
import MainPage from './MainPage';
import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <MainPage />
      </Provider>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));