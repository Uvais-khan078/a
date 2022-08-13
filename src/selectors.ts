import { createSelector } from "reselect";
import { State } from "./store";

export const showStateSelector = (s: State) => s.shows;

export const showsEntitiesSelector = createSelector(
  showStateSelector,
  (showState) => showState.entities
);

const showsAgainstQuerySelector = createSelector(
  showStateSelector,
  (showState) => showState.againstQuery
);

export const showsQuerySelector = createSelector(
  showStateSelector,
  (showState) => showState.query
);

export const showsIdsSelector = createSelector(
  showsQuerySelector,
  showsAgainstQuerySelector,
  (query, againstQuery) => againstQuery[query] || []
);
export const showsSelector = createSelector(
  showsIdsSelector,
  showsEntitiesSelector,
  (Ids, entities) => Ids.map((id) => entities[id])
);
export const showLoadingSelector = createSelector(
  showStateSelector,
  (showState) => showState.showLoading
);
