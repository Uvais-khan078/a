import { FC, memo, useEffect } from "react";
import { connect } from "react-redux";
import {
  showCastFetchAction,
  showFetchAction,
  showlistFetchAction,
} from "../actions";
import { withRouter, WithRouterProps } from "../hocs/withRouter";
import { Actor } from "../models/actors";
import { Show } from "../models/Show";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import {
  showActorsSelector,
  showLoadingSelector,
  showsEntitiesSelector,
  showsSelector,
} from "../selectors";
import { State } from "../store";
import ActorRow from "./ActorRow";
import LinkWithQuery from "./LinkWithQuery";
import Spinner from "./Spinner";
import { useSearchParams } from "react-router-dom";

type ShowDetailProps = {
  show: Show;
  loading: boolean;
  actors: Actor[];
  fetchShows: (query: string) => void;
  fetchShow: (showId: number) => void;
  fetchShowCast: (showId: number) => void;
  prev?: string;
  next?: string;
} & WithRouterProps;

const ShowDetail: FC<ShowDetailProps> = ({
  show,
  fetchShows,
  fetchShowCast,
  fetchShow,
  params,
  actors,
  loading,
  prev,
  search,
  next,
}) => {
  useEffect(() => {
    const ShowId = +params.showId;
    fetchShow(ShowId);
    fetchShowCast(ShowId);
  }, [params, show.id]);

  useEffect(() => {
    const query = search.get(`q`);
    if (!show && query) {
      fetchShows(query);
    }
  }, []);

  return (
    <>
      {loading && <Spinner />}{" "}
      {show && (
        <div>
          <div className="  p-2 flex bg-gray-600 ">
            <div className="flex p-10 items-center ">
              {prev ? (
                <LinkWithQuery
                  to={prev}
                  className="p-5 rounded-full border-2  "
                >
                  <VscChevronLeft />
                </LinkWithQuery>
              ) : (
                <span></span>
              )}
            </div>
            <div>
              <div className=" flex p-2   ">
                <div className="flex  rounded-md ">
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
                    <div
                      dangerouslySetInnerHTML={{ __html: show.summary }}
                    ></div>
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
            <div className="flex items-center ">
              {next ? (
                <LinkWithQuery to={next} className="p-5 rounded-full border-2 ">
                  <VscChevronRight />
                </LinkWithQuery>
              ) : (
                <span></span>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

ShowDetail.defaultProps = {};

const mapStateToProps = (s: State, props: any) => {
  const showId = +props.params.showId;
  const shows = showsSelector(s);

  let prev, next;

  for (let i = 0; i < shows.length; i++) {
    const show = shows[i];
    if (show.id === showId) {
      if (i + 1 < shows.length) {
        next = shows[i + 1];
      }
      if (i >= 1) {
        prev = shows[i - 1];
      }

      break;
    }
  }
  return {
    show: showsEntitiesSelector(s)[showId],
    loading: showLoadingSelector(s)[showId],
    actors: showActorsSelector(s)[showId],
    prev: prev && `/show/${prev.id}/`,
    next: next && `/show/${next.id}/`,
  };
};

const mapDispatchToProps = {
  fetchShow: showFetchAction,
  fetchShowCast: showCastFetchAction,
  fetchShows: showlistFetchAction,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(memo(ShowDetail))
);
