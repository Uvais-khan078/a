import { FC, memo } from "react";
import { useNavigate } from "react-router-dom";
import { Show } from "../models/Show";

type ShowRowProps = {
  show: Show;
};

const ShowRow: FC<ShowRowProps> = ({ show }) => {
  const navigate = useNavigate();

  const handleClick = () => navigate("/show/" + show.id);

  return (
    <div
      onClick={handleClick}
      className=" cursor-pointer w-72 m-2 rounded-lg  bg-gray-600 "
    >
      <div className=" flex flex-col p-2 items-center ">
        <div className="flex flex-col items-stretch  rounded-md ">
          <img
            className="mx-auto w-72 h-72 rounded-md object-cover "
            src={
              show.image?.medium ||
              "https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg"
            }
          />
          <div className=" flex items-center flex-col">
            <h3 className="text-2xl">{show.name}</h3>
            <div dangerouslySetInnerHTML={{ __html: show.summary }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

ShowRow.defaultProps = {};

export default memo(ShowRow);
