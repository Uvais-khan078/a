import { FC, memo } from "react";
import ShowDetail from "../components/ShowDetail";

type ShowDetailsPageProps = {};

const ShowDetailsPage: FC<ShowDetailsPageProps> = (props) => {
  return (
    <>
      <ShowDetail />
    </>
  );
};

ShowDetailsPage.defaultProps = {};

export default memo(ShowDetailsPage);
