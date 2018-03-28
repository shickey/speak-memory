import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom'

import Navbar from './Navbar';
import Dashboard from './Dashboard';
import DiscussionPlayer from './DiscussionPlayer';
import Recorder from './Recorder';

const firebaseConfig = {
  apiKey: 'AIzaSyCVTIPfhDXc0nYq2fiqPC9cLUUlaGrOsTo',
  authDomain: 'speak-memory.firebaseapp.com',
  databaseURL: 'https://speak-memory.firebaseio.com',
  projectId: 'speak-memory',
  storageBucket: 'gs://speak-memory.appspot.com/',
  messagingSenderId: '1032812984363'
};

firebase.initializeApp(firebaseConfig);

const rrfConfig = {};

const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig)
)(createStore);

const rootReducer = combineReducers({
  firebase: firebaseReducer
});

const store = createStoreWithFirebase(rootReducer, {});

const App = () => (
  <Provider store={store}>
    <HashRouter>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/discussion/:discussionId" component={DiscussionPlayer} />
          <Route path="/record" component={Recorder} />
        </Switch>
      </div>
    </HashRouter>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
