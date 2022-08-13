import { createSelector } from "reselect";
import { Actor } from "./models/actors";
import { State } from "./store";

export const showStateSelector = (s: State) => s.shows;
export const actorStateSelector = (s: State) => s.actors;

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

export const actorEntitiesSelector = createSelector(
  actorStateSelector,
  (actorState) => actorState.entites
);

export const showActorIdsSelector = createSelector(
  showStateSelector,
  (showState) => showState.actors
);

export const showActorsSelector = createSelector(
  showActorIdsSelector,
  actorEntitiesSelector,
  (showActorIds, actorEntities) => {
    const data = Object.keys(showActorIds).reduce((showActors, showId) => {
      const actorIds = showActorIds[+showId];
      const actors = actorIds.map((id) => actorEntities[id]);
      return { ...showActors, [+showId]: actors };
    }, {});
    return data as { [id: number]: Actor[] };
  }
);
