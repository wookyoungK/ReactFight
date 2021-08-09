import { createStore, applyMiddleware } from 'redux';
import rootReducer, { rootSaga } from 'modules/reducers';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { SagaMonitor } from '@redux-saga/core';

const logger = createLogger();
// const monitor = Window.__SAGA_MONITOR_EXTENSION__;
// { SagaMonitor: monitor }
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware, logger)));
sagaMiddleware.run(rootSaga);

export default store;
