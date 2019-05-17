import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import {BrowserRouter as Router,withRouter} from 'react-router-dom';

const store = createStore(
  rootReducer, // this is the most basic reducer. A function that returns and object. Replace it.
  applyMiddleware(thunk, logger)
);



const rootElement = document.getElementById('root');
const AppWithRouter = withRouter(App);
ReactDOM.render(
  <Router>
    <Provider store={store}>
    <AppWithRouter />
    </Provider>
  </Router>,
  rootElement
);

// ReactDOM.render(
//   <Router>
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );
