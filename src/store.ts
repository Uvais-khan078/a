import { Reducer, createStore, applyMiddleware, combineReducers } from "redux";
import showReducer from "./reducer/shows";
import { rootSaga, sagaMiddleware } from "./sagas";

export const reducer = combineReducers({
  shows: showReducer,
});

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

export type State = ReturnType<typeof store.getState>;

sagaMiddleware.run(rootSaga);
export default store;
