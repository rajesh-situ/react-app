import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/index.reducer';
import rootSaga from './sagas/index.saga';

const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory();

// setting up redux DevTools extension when creating the store
const enhancer = composeWithDevTools(applyMiddleware(
  routerMiddleware(history),
  sagaMiddleware
));

export default function getStore(initialState = {}) {
  const store = createStore(rootReducer(history), initialState, enhancer);
  sagaMiddleware.run(rootSaga);
  return store;
}
