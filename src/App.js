import React from 'react';
import AppNavigatior from './navigation';
import {Provider} from 'react-redux';
import {store} from './redux/reduxUtils';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigatior />
    </Provider>
  );
};

export default App;
