import { AnyAction } from "redux";
import createSagaMiddleware from "redux-saga";
import { call, delay, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  showCastFetchdAction,
  showFetchdAction,
  showlistFetchdAction,
  SHOW_CAST_FETCH,
  SHOW_FETCH,
  SHOW_LIST_FETCH,
} from "./actions";
import { getShows, getShow, getShowCast } from "./api";

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

export function* fetchShowCast(action: AnyAction): Generator<any, any, any> {
  const showId: number = action.payload;
  const data = yield call(getShowCast, showId);
  const actors = data.map((d: any) => d.person);
  yield put(showCastFetchdAction(showId, actors));
}

export function* rootSaga() {
  yield takeLatest(SHOW_LIST_FETCH, fetchShowsSaga);
  yield takeLatest(SHOW_FETCH, fetchShowSaga);
  yield takeEvery(SHOW_CAST_FETCH, fetchShowCast);
}
