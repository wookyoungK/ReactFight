import { all, call, put, takeLeading, debounce } from "redux-saga/effects";
import { actions, types } from "./index";
import { callApiLike } from "../../common/api";

export function* fetchData(action) {
  yield put(actions.setLoading(true));
  yield put(actions.addLike(action.timeline.id, 1));
  yield put(actions.setValue("error", ""));
  try {
    yield call(callApiLike);
  } catch (error) {
    yield put(actions.setValue("error", error));
    yield put(actions.addLike(action.timeline.id, -1));
  }
  yield put(actions.setLoading(false));
}

export function* trySetText(action) {
  yield put(actions.setValue("text", action.text));
}

export default function* () {
  yield all([
    takeLeading(types.REQUERST_LIKE, fetchData),
    debounce(500, types.TRY_SET_TEXT, trySetText),
  ]);
}
