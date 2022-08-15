import { ChangeEvent, FC, memo, useEffect } from "react";
import { connect } from "react-redux";
import { showlistFetchAction } from "../actions";
import { Show } from "../models/Show";
import { showsQuerySelector, showsSelector } from "../selectors";
import { State } from "../store";
import ShowRow from "./ShowRow";

type ShowListProps = {
  query: string;
  fetchShows: (query: string) => void;
  shows: Show[];
};

const ShowList: FC<ShowListProps> = ({ shows, query, fetchShows }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    fetchShows(event.target.value);
  };
  return (
    <div>
      <div className="flex justify-center m-5  ">
        <input
          className="border-2 px-3 text-xl  w-96 h-11 border-black rounded-3xl "
          placeholder="search"
          value={query}
          onChange={handleChange}
        />
      </div>
      <div className=" flex flex-wrap justify-around mt-4">
        {shows.map((s) => (
          <ShowRow key={s.id} show={s} query={query} />
        ))}
      </div>
    </div>
  );
};

ShowList.defaultProps = {};
const mapStateToProps = (s: State) => ({
  query: showsQuerySelector(s),
  shows: showsSelector(s),
});
const mapDispatchToProps = {
  fetchShows: showlistFetchAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(ShowList));
