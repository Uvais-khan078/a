import { normalize, schema } from "normalizr";
import { Reducer } from "redux";
import { SHOW_CAST_FETCH, SHOW_CAST_FETCHD } from "../actions";
import { Actor } from "../models/actors";

type ActorState = {
  entites: { [id: number]: Actor[] };
};

const initialActorState: ActorState = {
  entites: {},
};

const actorReducer: Reducer<ActorState> = (
  state = initialActorState,
  action
) => {
  switch (action.type) {
    case SHOW_CAST_FETCHD:
      const actorEntity = new schema.Entity("actors");
      const normalized = normalize(action.payload.actors, [actorEntity]);
      const normalizedActors = normalized.entities.actors;

      const actorIds = normalized.result;

      return {
        ...state,
        entites: { ...state.entites, ...normalizedActors },
      };
    default:
      return state;
  }
};
export default actorReducer;
