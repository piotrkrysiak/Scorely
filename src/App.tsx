import React from 'react';
import { Provider } from 'react-redux';
import LoginScreen from './screens/LoginScreen';
import store from './store';

const App = () => (
  <Provider store={store}>
    <LoginScreen />
  </Provider>
);

export default App;
