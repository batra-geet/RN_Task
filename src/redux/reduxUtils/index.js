import {createStore, applyMiddleware, compose} from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './rootReducer';

const middlewares = [ReduxThunk];
// if (__DEV__) {
//   middlewares.push(logger);
// }

const configureStore = () => {
  const reduxStore = createStore(
    rootReducer,
    {},
    compose(applyMiddleware(...middlewares)),
  );
  return {reduxStore};
};

const {reduxStore: store} = configureStore();

export {store};
