import { normalize, schema } from "normalizr";
import { Reducer } from "redux";
import {
  SHOW_FETCH,
  SHOW_FETCHD,
  SHOW_LIST_FETCH,
  SHOW_LIST_FETCHD,
} from "../actions";
import { Show } from "../models/Show";

type ShowState = {
  entities: { [id: number]: Show };
  againstQuery: { [q: string]: number[] };
  query: string;
  showLoading: { [showId: number]: boolean };
};

const initialShowState: ShowState = {
  entities: {},
  againstQuery: {},
  query: "",
  showLoading: {},
};

const showReducer: Reducer<ShowState> = (state = initialShowState, action) => {
  switch (action.type) {
    case SHOW_FETCH:
      return {
        ...state,
        showLoading: { [action.payload]: true },
      };

    case SHOW_FETCHD:
      const show: Show = action.payload;
      return {
        ...state,
        entities: { ...state.entities, [show.id]: show },
        showLoading: { [show.id]: false },
      };
    case SHOW_LIST_FETCH:
      return { ...state, query: action.payload };
    case SHOW_LIST_FETCHD:
      const { query, shows } = action.payload as {
        query: string;
        shows: Show[];
      };
      const showsEntity = new schema.Entity("shows");
      const normalized = normalize(shows, [showsEntity]);
      const normalizedShows = normalized.entities.shows;

      const ids = shows.map((s) => s.id);

      return {
        ...state,
        entities: { ...state.entities, ...normalizedShows },
        againstQuery: { ...state.againstQuery, [query]: ids },
      };
    default:
      return state;
  }
};
export default showReducer;
