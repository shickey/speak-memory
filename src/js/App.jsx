import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';

import Navbar from './Navbar';
import DiscussionPlayer from './DiscussionPlayer';

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
    <div>
      <Navbar />
      <DiscussionPlayer />
    </div>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
