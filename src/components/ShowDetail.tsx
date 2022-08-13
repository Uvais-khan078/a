import { FC, memo, useEffect } from "react";
import { connect } from "react-redux";
import { showCastFetchAction, showFetchAction } from "../actions";
import { withRouter, WithRouterProps } from "../hocs/withRouter";
import { Actor } from "../models/actors";
import { Show } from "../models/Show";
import { fetchShowsSaga } from "../sagas";
import {
  showActorsSelector,
  showLoadingSelector,
  showsEntitiesSelector,
} from "../selectors";
import { State } from "../store";
import ActorRow from "./ActorRow";
import Spinner from "./Spinner";

type ShowDetailProps = {
  show: Show;
  loading: boolean;
  actors: Actor[];
  fetchShow: (showId: number) => void;
  fetchShowCast: (showId: number) => void;
} & WithRouterProps;

const ShowDetail: FC<ShowDetailProps> = ({
  show,
  fetchShowCast,
  fetchShow,
  params,
  actors,
  loading,
}) => {
  useEffect(() => {
    const ShowId = +params.showId;
    fetchShow(ShowId);
    fetchShowCast(ShowId);
  }, []);

  return (
    <>
      {loading && <Spinner />}{" "}
      {show && (
        <div>
          <div className="  p-2  bg-gray-600 ">
            <div className=" flex  p-2  ">
              <div className="flex   rounded-md ">
                <img
                  className="mx-auto w-72 h-72 rounded-md object-cover "
                  src={
                    show.image?.medium ||
                    "https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg"
                  }
                />
                <div className="p-4 ">
                  <h3 className=" text-2xl font-semibold">{show.name}</h3>
                  <h3 className=" text-xl font-medium">
                    Rating:- {show.rating.average}/10
                  </h3>
                  <h3 className=" text-xl font-medium">
                    Language:- {show.language}
                  </h3>
                  <div dangerouslySetInnerHTML={{ __html: show.summary }}></div>
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-semibold pl-8">Cast:-</h3>
            {actors && (
              <div className=" flex flex-wrap justify-around mt-4">
                {actors.map((a) => (
                  <ActorRow key={a.id} actor={a} />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

ShowDetail.defaultProps = {};

const mapStateToProps = (s: State, props: any) => {
  const showId = +props.params.showId;
  return {
    show: showsEntitiesSelector(s)[showId],
    loading: showLoadingSelector(s)[showId],
    actors: showActorsSelector(s)[showId],
  };
};

const mapDispatchToProps = {
  fetchShow: showFetchAction,
  fetchShowCast: showCastFetchAction,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(memo(ShowDetail))
);
