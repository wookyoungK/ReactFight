import { callApiLike } from "./src/common/api";

function* loginflow() {
  while (true) {
    const { id, password } = yield take(types.LOGIN);
    const userInfo = yield callApiLike(callApiLogin, id, password);
    yield put(types.SET_USER_INFO, userInfo);
    yield take(types.LOGOUT);
    yield call(callApiLogout, id);
    yield put(types.SET_USER_INFO, null);
  }
}
