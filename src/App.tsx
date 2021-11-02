import React from 'react';
import { Provider } from 'react-redux';
import TestComponent from 'src/components/TestComponent';
import store from './store';

const App = () => (
  <Provider store={store}>
    <TestComponent />
  </Provider>
);

export default App;
