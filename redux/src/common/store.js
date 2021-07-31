import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import timelineReducer from "../timline/state";
import timelineSaga from "../timline/state/saga";
import friendReducer from "../friend/state";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";

const reducer = combineReducers({
  timeline: timelineReducer,
  friend: friendReducer,
});
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

function* rootSaga() {
  yield all([timelineSaga()]);
}
sagaMiddleware.run(rootSaga);

export default store;
