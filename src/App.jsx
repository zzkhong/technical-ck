import React from 'react';
import { Provider } from 'react-redux';
import store from 'common/setup/store';
import Routes from 'common/setup/Routes';

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
