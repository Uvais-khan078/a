import { Reducer, createStore, applyMiddleware, combineReducers } from "redux";
import actorReducer from "./reducer/actors";
import showReducer from "./reducer/shows";
import { rootSaga, sagaMiddleware } from "./sagas";

export const reducer = combineReducers({
  shows: showReducer,
  actors: actorReducer,
});

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

export type State = ReturnType<typeof store.getState>;

sagaMiddleware.run(rootSaga);
export default store;
