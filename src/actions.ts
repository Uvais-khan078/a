import { Show } from "./models/Show";

export const SHOW_LIST_FETCH = "show list fetch";
export const SHOW_LIST_FETCHD = "show list fetchd";

export const SHOW_FETCH = "show  fetch";
export const SHOW_FETCHD = "show  fetchd";

export const showlistFetchAction = (query: string) => ({
  type: SHOW_LIST_FETCH,
  payload: query,
});

export const showlistFetchdAction = (query: string, shows: Show[]) => ({
  type: SHOW_LIST_FETCHD,
  payload: { query, shows },
});

export const showFetchAction = (showId: number) => ({
  type: SHOW_FETCH,
  payload: showId,
});

export const showFetchdAction = (show: Show) => ({
  type: SHOW_FETCHD,
  payload: show,
});
