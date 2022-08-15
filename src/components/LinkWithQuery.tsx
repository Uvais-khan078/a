import { FC, memo } from "react";
import { Link, useLocation } from "react-router-dom";

const LinkWithQuery: FC<any> = ({ children, to, ...props }) => {
  const { search } = useLocation();

  return (
    <Link to={to + search} {...props}>
      {children}
    </Link>
  );
};

LinkWithQuery.defaultProps = {};

export default memo(LinkWithQuery);
