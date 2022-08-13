import { AnyAction } from "redux";
import createSagaMiddleware from "redux-saga";
import { call, delay, put, takeLatest } from "redux-saga/effects";
import {
  showFetchdAction,
  showlistFetchdAction,
  SHOW_FETCH,
  SHOW_LIST_FETCH,
} from "./actions";
import { getShows, getShow } from "./api";

export const sagaMiddleware = createSagaMiddleware();

export function* fetchShowsSaga(action: AnyAction): Generator<any, any, any> {
  yield delay(500);
  if (!action.payload) {
    return;
  }
  const query = action.payload;
  const data = yield call(getShows, query);
  yield put(showlistFetchdAction(query, data));
}

export function* fetchShowSaga(action: AnyAction): Generator<any, any, any> {
  const showId: number = action.payload;
  const data = yield call(getShow, showId);
  yield put(showFetchdAction(data));
}

export function* rootSaga() {
  yield takeLatest(SHOW_LIST_FETCH, fetchShowsSaga);
  yield takeLatest(SHOW_FETCH, fetchShowSaga);
}
