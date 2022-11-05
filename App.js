import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './app/navigation/Navigator';
import { Provider } from 'react-redux';
import { persistor, store } from './app/store';
import { PersistGate } from 'redux-persist/integration/react';


export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigator/>
      </PersistGate>
    </Provider>
  );
}