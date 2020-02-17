import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {store, persistor} from './store';
import {PersistGate} from 'redux-persist/integration/react';
import Loading from './src/sections/components/Loading';
import AppLayout from './src/AppLayout';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          <AppLayout />
        </PersistGate>
      </Provider>
    );
  }
}
