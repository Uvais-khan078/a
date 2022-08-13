import { FC, memo } from "react";
import ShowInput from "../components/ShowInput";
import ShowList from "../components/ShowList";

type ShowListPageProps = {};

const ShowListPage: FC<ShowListPageProps> = (props) => {
  return (
    <>
      <div className="">
        <ShowInput />

        <ShowList />
      </div>
    </>
  );
};

ShowListPage.defaultProps = {};

export default memo(ShowListPage);
