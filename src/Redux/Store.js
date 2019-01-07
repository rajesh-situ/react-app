import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../Redux/Reducers/index.reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../Redux/Sagas/index.saga'
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();

// setting up redux DevTools extension when creating the store
const enhancer = composeWithDevTools(applyMiddleware(sagaMiddleware));

export default function getStore (initialState = {}) {
    const store = createStore(rootReducer, initialState,enhancer)
    sagaMiddleware.run(rootSaga);   
    return store;
}
