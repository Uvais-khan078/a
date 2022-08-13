import { ChangeEvent, FC, memo, useEffect } from "react";
import { connect } from "react-redux";
import { showlistFetchAction } from "../actions";
import { Show } from "../models/Show";
import { showsQuerySelector, showsSelector } from "../selectors";
import { State } from "../store";
import ShowRow from "./ShowRow";

type ShowListProps = {
  shows: Show[];
};

const ShowList: FC<ShowListProps> = ({ shows }) => {
  return (
    <div className=" flex flex-wrap justify-around mt-4">
      {shows.map((s) => (
        <ShowRow key={s.id} show={s} />
      ))}
    </div>
  );
};

ShowList.defaultProps = {};

const mapStateToProps = (s: State) => ({
  shows: showsSelector(s),
});

export default connect(mapStateToProps)(memo(ShowList));
