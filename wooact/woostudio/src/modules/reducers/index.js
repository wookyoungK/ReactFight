import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import chatList, { getChatListSaga } from 'modules/actions/chat';
import fontSize from 'modules/actions/fontSize';
import autoComplete, { autoCompleteSaga } from 'modules/actions/autoComplete/index';

const rootReducer = combineReducers({
  autoComplete,
  chatList,
  fontSize,
});

export function* rootSaga() {
  yield all([autoCompleteSaga(), getChatListSaga()]);
}

export default rootReducer;
