import { FC, memo, useEffect } from "react";
import { connect } from "react-redux";
import { showFetchAction } from "../actions";
import { withRouter, WithRouterProps } from "../hocs/withRouter";
import { Show } from "../models/Show";
import { fetchShowsSaga } from "../sagas";
import { showLoadingSelector, showsEntitiesSelector } from "../selectors";
import { State } from "../store";
import Spinner from "./Spinner";

type ShowDetailProps = {
  show: Show;
  loading: boolean;
  fetchShow: (showId: number) => void;
} & WithRouterProps;

const ShowDetail: FC<ShowDetailProps> = ({
  show,
  fetchShow,
  params,
  loading,
}) => {
  useEffect(() => {
    if (!show) {
      fetchShow(+params.showId);
    }
  }, []);

  return (
    <>
      {loading && <Spinner />}{" "}
      {show && (
        <div className="   m-2 rounded-lg  bg-gray-600 ">
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
  };
};

const mapDispatchToProps = {
  fetchShow: showFetchAction,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(memo(ShowDetail))
);
