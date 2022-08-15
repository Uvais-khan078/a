import { FC, memo } from "react";
import ShowList from "../components/ShowList";

type ShowListPageProps = {};

const ShowListPage: FC<ShowListPageProps> = (props) => {
  return (
    <>
      <div className="">
        <ShowList />
      </div>
    </>
  );
};

ShowListPage.defaultProps = {};

export default memo(ShowListPage);
