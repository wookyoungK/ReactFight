import { createAction, handleActions } from 'redux-actions';
import { call, put, takeLatest } from 'redux-saga/effects';
import { requestAutoCompleteList } from 'modules/fetch/api';

const AUTO_COMPLETE_GET = 'autoComplete/AUTO_COMPLETE_GET';
const AUTO_COMPLETE_RESULT = 'autoComplete/AUTO_COMPLETE_RESULT';
const AUTO_COMPLETE = 'autoComplete/AUTO_COMPLETE';
const AUTO_COMPLETE_RESET = 'autoComplete/AUTO_COMPLETE_RESET';

export const autoCompleteList = createAction(AUTO_COMPLETE_GET);
export const autoCompleteState = createAction(AUTO_COMPLETE);
export const autoCompleteReset = createAction(AUTO_COMPLETE_RESET);

const initialize = {
  active: true,
  sentenceList: [],
};

export function* getAutoCompleteList(action) {
  try {
    const result = yield call(requestAutoCompleteList, action.payload);
    yield put({ type: AUTO_COMPLETE_RESULT, payload: result.data });
  } catch (err) {
    console.log(`consoleMessage:::${err.message}`);
  }
}

export function* autoCompleteSaga() {
  yield takeLatest(AUTO_COMPLETE_GET, getAutoCompleteList);
}

const autoComplete = handleActions(
  {
    [AUTO_COMPLETE_RESULT]: (state, { payload: sentenceList }) => {
      console.log('consoleMessage::::::::' + JSON.stringify(sentenceList));
      return { ...state, sentenceList };
    },
    [AUTO_COMPLETE]: state => ({ ...state, active: !state.active }),
    [AUTO_COMPLETE_RESET]: state => ({ ...state, sentenceList: [] }),
  },
  initialize
);

export default autoComplete;
