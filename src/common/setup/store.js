import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';
import sagas from './sagas';

let reduxMiddleware;
const sagaMiddleware = createSagaMiddleware();

// eslint-disable-next-line no-undef
if (__DEV__) {
  reduxMiddleware = composeWithDevTools(applyMiddleware(
    sagaMiddleware,
  ));
} else {
  reduxMiddleware = applyMiddleware(
    sagaMiddleware,
  );
}

const store = createStore(
  reducers,
  reduxMiddleware,
);
sagaMiddleware.run(sagas);

export default store;
