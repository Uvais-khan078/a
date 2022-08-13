import { FC, memo } from "react";
import { NavLink } from "react-router-dom";

type NotFoundPageProps = {};

const NotFoundPage: FC<NotFoundPageProps> = (props) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-9xl text-black flex">Error-404</h1>
        <h1 className="text-9xl text-black flex"> Page not found</h1>
        <div className="flex">
          <NavLink to="/home">
            <span className="text-black">Go back to Home page</span>
          </NavLink>
        </div>
      </div>
    </>
  );
};

NotFoundPage.defaultProps = {};

export default memo(NotFoundPage);
