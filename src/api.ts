import axios from "axios";
import { Actor } from "./models/actors";
import { Show } from "./models/Show";

export const getShows = async (query: string) => {
  const response = await axios.get<{ show: Show }[]>(
    "https://api.tvmaze.com/search/shows?q=" + query
  );
  return response.data.map((d) => d.show);
};

export const getShow = async (showId: number) => {
  const response = await axios.get<Show>(
    "https://api.tvmaze.com/shows/" + showId
  );
  return response.data;
};

export const getShowCast = async (showId: number) => {
  const response = await axios.get<{ person: Actor[] }>(
    "https://api.tvmaze.com/shows/" + showId + "/cast"
  );
  return response.data;
};
