import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import './src/config/ReactotronConfig';

import { store, persistor } from './src/store';
import Routes from '~/routes';

export default function App() {
  return (
    <Provider>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Routes />
    </Provider>
  );
}
