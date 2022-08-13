import { ChangeEvent, FC, memo } from "react";
import { connect } from "react-redux";
import { showlistFetchAction } from "../actions";
import { showsQuerySelector } from "../selectors";
import { State } from "../store";

type ShowInputProps = {
  query: string;
  fetchShows: (query: string) => void;
};

const ShowInput: FC<ShowInputProps> = ({ query, fetchShows }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    fetchShows(event.target.value);
  };
  return (
    <div className="flex justify-center m-5  ">
      <input
        className="border-2 px-3 text-xl  w-96 h-11 border-black rounded-3xl "
        placeholder="search"
        value={query}
        onChange={handleChange}
      />
    </div>
  );
};

ShowInput.defaultProps = {};
const mapStateToProps = (s: State) => ({
  query: showsQuerySelector(s),
});
const mapDispatchToProps = {
  fetchShows: showlistFetchAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(ShowInput));
